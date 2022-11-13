const {Router}=require("express");

module.exports=(app)=>{
    const userController=require("../controllers/user.controller")
    
    const router=require('express').Router();

    
    router.post('/users',userController.signup);
    router.post('/auth',userController.signin); 
    app.use("/api",router);
}