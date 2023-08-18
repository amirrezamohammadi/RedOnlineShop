using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RedOnlineShop.Controllers.Helpers;
using RedOnlineShop.Models;

namespace RedOnlineShop.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly OnlineShopContext _context;

        public UserController(OnlineShopContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        [Route("api/getUser")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/User/5
        [Route("api/getUserById/{id}")]
        //[HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [Route("api/login")]
        //[HttpGet("{id}")]
        public async Task<ActionResult<User>> Login([FromBody] LoginHelper loginData)
        {
            var hashPassword = ComputeHash(loginData.Password);
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = _context.Users.FirstOrDefault(p => p.Email == loginData.Email && p.HashPassword==hashPassword);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        //// PUT: api/User/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutUser(int id, User user)
        //{
        //    if (id != user.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/User
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("api/signup")]
        public async Task<ActionResult<User>> PostUser([FromBody] SignupHelper user)
        {
            var SignupUser = new User();
            var hashPassword = ComputeHash(user.Password);

            SignupUser.FirstName = user.FirstName;
            SignupUser.LastName = user.LastName;
            SignupUser.Email = user.Email;
            SignupUser.Role = user.Role;
            SignupUser.HashPassword = hashPassword;

            if (_context.Users == null)
            {
                return Problem("Entity set 'OnlineShopContext.Users'  is null.");
            }
           

            _context.Users.Add(SignupUser);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserExists(SignupUser.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUser", new { id = SignupUser.Id }, SignupUser);
        }

        //// DELETE: api/User/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteUser(int id)
        //{
        //    if (_context.Users == null)
        //    {
        //        return NotFound();
        //    }
        //    var user = await _context.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Users.Remove(user);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool UserExists(int id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        static string ComputeHash(string s)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashValue = sha256.ComputeHash(Encoding.UTF8.GetBytes(s));
                return Convert.ToHexString(hashValue);
            }
        }
    }
}
