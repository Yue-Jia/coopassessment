using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProductAPI
{
    public class ProductRepository
    {
        public List<Product> GetProducts() {
            ProductDBContext productDBContext = new ProductDBContext();
            return productDBContext.Products.ToList<Product>();
        }

    }
}