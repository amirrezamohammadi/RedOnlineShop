using System;
using System.Collections.Generic;

namespace RedOnlineShop.Models;

public partial class Order
{
    public int Id { get; set; }

    public int? UserRef { get; set; }

    public DateOnly? CreatedDate { get; set; }

    public bool? IsCart { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual User? UserRefNavigation { get; set; }
}
