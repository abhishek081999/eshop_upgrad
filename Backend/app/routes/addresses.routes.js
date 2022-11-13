const {Router}=require("express");

module.exports=(app)=>{
    const addressesController=require("../controllers/addresses.controller")
    
    const router=require('express').Router();

    router.post('/addresses',addressesController.AddAddresses);
     

    app.use("/api",router);
}


