using System;
namespace RedOnlineShop.Controllers.Helpers
{
	public class PostOrderHelper
	{
		public UserDetailsHelper UserDetails { get; set; }
		public OrderHelper OrderItem { get; set; }
        public ICollection<OrderDetailHelper> OrderDetails { get; set; }
	}
}

