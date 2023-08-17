using System;
using System.Collections.Generic;

namespace RedOnlineShop.Models;

public partial class Product
{
    public int Id { get; set; }

    public int? CategoryRef { get; set; }

    public int? TagRef { get; set; }

    public string? Title { get; set; }

    public string? Brand { get; set; }

    public byte[]? Image { get; set; }

    public int? Price { get; set; }

    public DateOnly? CreatedDate { get; set; }

    public string? Description { get; set; }

    public virtual Category? CategoryRefNavigation { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual Tag? TagRefNavigation { get; set; }
}
