using System;
using System.Collections.Generic;

namespace RedOnlineShop.Models;

public partial class Category
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
