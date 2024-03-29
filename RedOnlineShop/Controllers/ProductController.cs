using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RedOnlineShop.Models;

namespace RedOnlineShop.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly OnlineShopContext _context;

        public ProductController(OnlineShopContext context)
        {
            _context = context;
        }

        // GET: api/Product
        [HttpGet]
        [Route("api/getAllProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.ToListAsync();
        }

        //[HttpGet("{id}")]
        [Route("api/getAllProduct/{categoryId}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int categoryId)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.CategoryRef == categoryId).ToListAsync();

            //if (product == null)
            //{
            //    return NotFound();
            //}

            //return product;
        }

        [HttpGet]
        [Route("api/getNewProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetNewProduct()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.TagRef == 1).ToListAsync();
        }

        [HttpGet]
        [Route("api/getDiscountProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetDiscountProduct()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.TagRef == 2).ToListAsync();
        }

        // GET: api/Product/5
        //[HttpGet("{id}")]
        [Route("api/getProduct/{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //// PUT: api/Product/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutProduct(int id, Product product)
        //{
        //    if (id != product.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(product).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductExists(id))
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

        //// POST: api/Product
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Product>> PostProduct(Product product)
        //{
        //  if (_context.Products == null)
        //  {
        //      return Problem("Entity set 'OnlineShopContext.Products'  is null.");
        //  }
        //    _context.Products.Add(product);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (ProductExists(product.Id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        //}

        //// DELETE: api/Product/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProduct(int id)
        //{
        //    if (_context.Products == null)
        //    {
        //        return NotFound();
        //    }
        //    var product = await _context.Products.FindAsync(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Products.Remove(product);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool ProductExists(int id)
        //{
        //    return (_context.Products?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
