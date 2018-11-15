using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CoffeeShop.Models;

namespace CoffeeShop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            CoffeeShopDBEntities ORM2 = new CoffeeShopDBEntities();
            ViewBag.SendDB = ORM2.Items.ToList<Item>();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Admin()
        {
            CoffeeShopDBEntities AdminORM = new CoffeeShopDBEntities();
            ViewBag.SendDB = AdminORM.Items.ToList<Item>();
            //ViewBag.Message = "Your Admin page.";

            return View();
        }
        public ActionResult Register()
        {
            ViewBag.Message = "Your registration page.";

            return View();
        }
        public ActionResult AddNewUser(User newUser)
        {
            CoffeeShopDBEntities ORM = new CoffeeShopDBEntities();
            ORM.Users.Add(newUser);//items references which table you want
            ORM.SaveChanges();
            ViewBag.SendDB = ORM.Items.ToList<Item>();
            ViewBag.AddedUser = "User was successfully added";
            return View("Index");
        }
        public ActionResult DeleteItem(string i_name)//crud
        {
            CoffeeShopDBEntities DeleteORM = new CoffeeShopDBEntities();
            Item ItemToDelete = DeleteORM.Items.Find(i_name);
            DeleteORM.Items.Remove(ItemToDelete);
            DeleteORM.SaveChanges();
            ViewBag.Message = "Item Deleted!";

            return View("Admin");
        }
        public ActionResult EditItem(string i_name)//crud
        {
            CoffeeShopDBEntities EditORM = new CoffeeShopDBEntities();
            Item ItemToDelete = EditORM.Items.Find(i_name);
            //CoffeeShopDBEntities UpdatedEditORM = new CoffeeShopDBEntities();
            //Item UpdatedItem = UpdatedEditORM.Items
            //ItemToDelete.i_name = "Hello";
            //ItemToDelete.
            ViewBag.EditedItem = ItemToDelete;

            //ViewBag.Message = "Edited!";

            return View();
        }
        public ActionResult AddItem(Item NewItem)//crud
        {
            CoffeeShopDBEntities AddORM = new CoffeeShopDBEntities();
            AddORM.Items.Add(NewItem);
            AddORM.SaveChanges();
            //ViewBag.AddMessage = "Added Item!";

            return View("Admin");
        }
        public ActionResult SaveEditItem(Item UpdatedItem)//crud
        {
            if (ModelState.IsValid)
            {
                CoffeeShopDBEntities SaveORM = new CoffeeShopDBEntities();
                Item ItemToUpdate = SaveORM.Items.Find(UpdatedItem.i_name);
                SaveORM.Entry(SaveORM.Items.Find(UpdatedItem.i_name)).CurrentValues.SetValues(UpdatedItem);
                SaveORM.SaveChanges();
                RedirectToAction("Admin");
            }
            //ViewBag.Message = "Saved Item!";
            return View("Admin");
        }
    }
}
        /*public ActionResult AddUser(UserInput newUser)
        {
            // ToDo: validation!!!!!!

            if (ModelState.IsValid)
            {
                // ToDo: Send the data to the DB

                // confirmation, or maybe send to the Index page

                //ViewData["ConfMessage"] = "Thanks " + newUser.FirstName;

                ViewBag.ConfMessage = "You're in, " + newUser.FirstName + "!";

                return View("Summary");
            }

            else
            {
                return View("Error");
            }
        }*/