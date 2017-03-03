using ReactFun.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactFun.Controllers
{
    public class ProductsController : ApiController
    {
        Product[] products = new Product[]
        {
            new Product {Id = 1 },
            new Product {Id = 2 },
            new Product {Id = 3 }
        };

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault(
                p => p.Id == id);

            if (product == null) return NotFound();

            return Ok(product);
        }
    }
}
