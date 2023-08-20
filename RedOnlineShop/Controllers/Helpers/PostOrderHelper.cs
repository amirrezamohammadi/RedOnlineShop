using System;
namespace RedOnlineShop.Controllers.Helpers
{
	public class PostOrderHelper
	{
        public OrderHelper OrderItem { get; set; }
        public ICollection<OrderDetailHelper> OrderDetails { get; set; }
	}
}

