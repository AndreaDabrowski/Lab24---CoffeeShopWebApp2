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
        //returns index page with an instanceof the Coffee Shop Database (Item Table)
        public ActionResult Index()
        {
            CoffeeShopDBEntities ORM2 = new CoffeeShopDBEntities();
            ViewBag.SendDB = ORM2.Items.ToList<Item>();
            return View();
        }

        public ActionResult Register()
        {
            ViewBag.Message = "Your registration page.";

            return View();
        }

        public ActionResult AddItem()
        {
            return View();
        }

        //returns to the Admin page with a new instance of the Coffee Shop Database (Item table)
        public ActionResult Admin()
        {
            CoffeeShopDBEntities AdminORM = new CoffeeShopDBEntities();
            ViewBag.SendItemDB = AdminORM.Items.ToList<Item>();
            return View();
        }

        //adds New Users to Database
        public ActionResult AddNewUser(User newUser)
        {
            CoffeeShopDBEntities ORM = new CoffeeShopDBEntities();
            ORM.Users.Add(newUser);//users references which table you want
            ORM.SaveChanges();
            ViewBag.SendDB = ORM.Items.ToList<Item>();
            ViewBag.AddedUser = "User was successfully added";
            return View("Index");
        }

        //Adds new items to database
        public ActionResult AddNewItem(Item NewItem)//crud
        {
            CoffeeShopDBEntities AddORM = new CoffeeShopDBEntities();
            AddORM.Items.Add(NewItem);
            AddORM.SaveChanges();
            ViewBag.AddedItem = "Item was successfully added";
            return RedirectToAction("Admin");
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
            ViewBag.EditedItem = ItemToDelete;
            return View();
        }

        //Saves Item to Database
        public ActionResult SaveEditItem(Item UpdatedItem)//crud
        {
            if (ModelState.IsValid)
            {
                CoffeeShopDBEntities SaveORM = new CoffeeShopDBEntities();
                Item ItemToUpdate = SaveORM.Items.Find(UpdatedItem.i_name);
                SaveORM.Entry(SaveORM.Items.Find(UpdatedItem.i_name)).CurrentValues.SetValues(UpdatedItem);
                SaveORM.SaveChanges();
                return RedirectToAction("Admin");
            }
            return View("Admin");
        }
    }
}
       