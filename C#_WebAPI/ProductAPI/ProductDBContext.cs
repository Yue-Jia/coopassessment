using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ProductAPI
{
    public class ProductDBContext: DbContext
    {
        public DbSet<Product> Products { get; set; }

    }
}