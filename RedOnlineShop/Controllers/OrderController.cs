using System;
using System.Collections.Generic;
using System.Linq;
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
    public class OrderController : ControllerBase
    {
        private readonly OnlineShopContext _context;

        public OrderController(OnlineShopContext context)
        {
            _context = context;
        }

        //// GET: api/Order
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        //{
        //  if (_context.Orders == null)
        //  {
        //      return NotFound();
        //  }
        //    return await _context.Orders.ToListAsync();
        //}

        // GET: api/Order/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            if (_context.Orders == null)
            {
                return NotFound();
            }
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        //// PUT: api/Order/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutOrder(int id, Order order)
        //{
        //    if (id != order.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(order).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OrderExists(id))
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

        //// POST: api/Order
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Order>> PostOrder(Order order)
        //{
        //  if (_context.Orders == null)
        //  {
        //      return Problem("Entity set 'OnlineShopContext.Orders'  is null.");
        //  }
        //    _context.Orders.Add(order);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        //}

        [HttpPost]
        [Route("api/postOrder")]
        public async Task<ActionResult<Order>> PostOrder([FromBody] PostOrderHelper order)
        {
            if (_context.Orders == null)
            {
                return Problem("Entity set 'OnlineShopContext.Orders'  is null.");
            }
            ICollection<OrderDetail> detailList = new List<OrderDetail>();
            foreach (var item in order.OrderDetails)
            {
                OrderDetail detailItem = new OrderDetail() { ProductId = item.ProductId, Amount = item.Amount, Size = item.Size };
                detailList.Add(detailItem);
            }
            Order newOrder = new Order() { UserRef = order.OrderItem.UserRef, CreatedDate = order.OrderItem.CreatedDate, IsCart = false, PostCode = order.OrderItem.PostCode, ShippingAddress = order.OrderItem.ShippingAddress, OrderDetails= detailList};
            _context.Orders.Add(newOrder);
            await _context.SaveChangesAsync();

            SendEmail(order.UserDetails,newOrder);

            return Ok();
        }

        //// DELETE: api/Order/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteOrder(int id)
        //{
        //    if (_context.Orders == null)
        //    {
        //        return NotFound();
        //    }
        //    var order = await _context.Orders.FindAsync(id);
        //    if (order == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Orders.Remove(order);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool OrderExists(int id)
        {
            return (_context.Orders?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        static void SendEmail(UserDetailsHelper user,Order order)
        {
            var emailSetting = new EmailSetting();
            var builder = WebApplication.CreateBuilder();
            builder.Configuration.GetSection("EmailSetting").Bind(emailSetting);
            string emailContent = "<div style=\"width: 500px\">\n      <img\n        src=\"https://red-island-050d4dd10.3.azurestaticapps.net/images/RedLogo.png\"\n        alt=\"logo\"\n        width=\"40px\"\n      />\n      <p style=\"font-family: sans-serif; text-align: justify\">Dear {0} {1}</p>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        Thank you for shopping with <strong style=\"color: #ff3333\">Red</strong>!\n        We're excited to confirm that your order has been successfully placed\n        and is now being processed.\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify\">Order Details:</p>\n      <ul style=\"font-family: sans-serif; text-align: justify\">\n        <li>Order Number: #23{2}</li>\n        <li>Order Date: {3}</li>\n        <li>Shipping Address: {4}</li>\n      </ul>\n      <p style=\"font-family: sans-serif; text-align: justify; margin-top: 40px\">\n        Best regards\n      </p>\n      <p style=\"font-family: sans-serif; text-align: justify\">\n        <strong style=\"color: #ff3333\">Red</strong> Shop Team\n      </p>\n    </div>";
            string content = string.Format(emailContent, user.FirstName,user.LastName,order.Id,order.CreatedDate,order.ShippingAddress);
            // create email message
            var message = new MimeMessage();
            message.From.Add(MailboxAddress.Parse(emailSetting.Email));
            message.To.Add(MailboxAddress.Parse(user.Email));
            message.Subject = "Order Confirmation for Your Purchase at Red Shop";
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
