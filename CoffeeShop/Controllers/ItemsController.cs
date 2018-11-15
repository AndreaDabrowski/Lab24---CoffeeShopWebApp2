using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CoffeeShop.Models;

namespace CoffeeShop.Controllers
{
    public class ItemsController : Controller
    {

        //

        // GET: /Items/ 

        public ActionResult Index()

        {
            CoffeeShopDBEntities entities = new CoffeeShopDBEntities();

            //ViewBag.ItemName = entities.Item.i_name;
            return View(entities.Items.ToList());

        }


    }
}
