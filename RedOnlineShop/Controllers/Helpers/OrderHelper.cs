using System;
namespace RedOnlineShop.Controllers.Helpers
{
	public class OrderHelper
	{
        public int? UserRef { get; set; }

        public DateOnly? CreatedDate { get; set; }

        public string? PostCode { get; set; }

        public string? ShippingAddress { get; set; }
    }
}

