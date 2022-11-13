const {Router}=require("express");

module.exports=(app)=>{
    const ordersController=require("../controllers/orders.controller")
    
    const router=require('express').Router();

  
    router.post('/orders',ordersController.findOrder); 

    app.use("/api",router);
}

