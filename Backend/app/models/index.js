const dbConfig=require("../config/db.config")

const mongoose=require("mongoose");

const Product=require("./products.model")(mongoose)
const Order=require("./orders.model")(mongoose)
const Addresses=require("./addresses.model")(mongoose)
const User=require("./users.model")(mongoose)

const db={};
db.url=dbConfig.url;
db.mongoose=mongoose;
db.Product=Product;
db.Order=Order;
db.Addresses=Addresses;
db.User=User;

module.exports=db;


