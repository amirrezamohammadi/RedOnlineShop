using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;
using RedOnlineShop.Controllers.Helpers;
using RedOnlineShop.Models;
using MailKit.Net.Smtp;



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
            var user = await _context.Users.FirstOrDefaultAsync(p => p.Email == loginData.Email && p.HashPassword==hashPassword);

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

            if (UserExists(SignupUser.Email))
            {
                return Conflict();
            }

            _context.Users.Add(SignupUser);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserExists(SignupUser.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            SendEmail(SignupUser.Email,SignupUser.FirstName);
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

        private bool UserExists(string email)
        {
            return (_context.Users?.Any(e => e.Email == email)).GetValueOrDefault();
        }

        static string ComputeHash(string s)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashValue = sha256.ComputeHash(Encoding.UTF8.GetBytes(s));
                return Convert.ToHexString(hashValue);
            }
        }

        static void SendEmail(string to,string username)
        {
            var emailSetting = new EmailSetting();
            var builder = WebApplication.CreateBuilder();
            builder.Configuration.GetSection("EmailSetting").Bind(emailSetting);
            string emailContent = "<div style=\"width: 500px\">\n      <img\n        src=\"https://red-island-050d4dd10.3.azurestaticapps.net/images/RedLogo.png\"\n        alt=\"logo\"\n        width=\"40px\"\n      />\n      <h3 style=\"font-family: sans-serif\">Welcome to Red Shop</h3>\n      <h3 style=\"font-family: sans-serif\">Your Account has been Created!</h3>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        Dear {0}, We're excited to welcome you to\n        <strong style=\"color: #ff3333\">Red</strong>! Your account has been\n        successfully created, and we're delighted to have you join our online\n        shopping community.\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        To start shopping, simply log in using your username and the password\n        you set up during the registration process. Should you ever forget your\n        password, don't worry! You can reset it by clicking the \"Forgot\n        Password\" link on the login page.\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        Thank you for choosing <strong style=\"color: #ff3333\">Red</strong>.\n        We're committed to providing you with a seamless shopping experience and\n        can't wait to serve you.\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify; margin-top: 40px\">\n        Happy shopping!\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify\">Best regards</p>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        <strong style=\"color: #ff3333\">Red</strong> Shop Team\n      </p>\n    </div>";
            string content = string.Format(emailContent, username);
            // create email message
            var message= new MimeMessage();
            message.From.Add(MailboxAddress.Parse(emailSetting.Email));
            message.To.Add(MailboxAddress.Parse(to));
            message.Subject = "Red Shop Account";
            message.Body = new TextPart(TextFormat.Html) { Text = content };

            // send email
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                // Note: only needed if the SMTP server requires authentication
                
                client.Authenticate(emailSetting.Email, emailSetting.AppPass);
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}
