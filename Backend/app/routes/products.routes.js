const {Router}=require("express");

module.exports=(app)=>{
    const productsController=require("../controllers/Products.controller")
    
    const router=require('express').Router();

    router.get('/products',productsController.findProducts);
    router.get('/products/categories',productsController.findProductCategories);
    router.get('/products/:id',productsController.findProductById);
    router.post('/products',productsController.saveProduct);
    router.put('/products/:id',productsController.updateProduct);
    router.delete('/products/:id',productsController.deleteProduct);
     

    app.use("/api",router);
}
