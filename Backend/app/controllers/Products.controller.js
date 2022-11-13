const { Product } = require("../models/index");


const findProducts = async (req, res) => {
    if (req.query !== undefined) {
        const { sortBy } = req.query

        Product.find({}).sort({ createdAt:sortBy }).then((result,err)=>{
            res.status(200).json({ success: true, products: result });
        
        });

    } else {
        res.status(500).json({ success: false, msg: err });

        //lazy load React.lazy suspense error boundary 

    }
}


const findProductCategories = async (req, res) => {
   
        
        const product = await Product.find();
       
        if(product!==null){
            res.status(200).json({ success: true, product: product });
        }else{
            res.status(500).json({ success: false, msg: err });
        };
    
}

const findProductById = async (req, res) => {
    try {
        const {productId} = req.params.id;
    
        const Product = await Product.find({ productId });
        if (Product.length!== null) {
            res.status(200).json({ success: true, product: Product });
        }
    } catch (error) {
        res.status(404).json({ success: true, msg: `No Product found for ID !` });
    }
}

const saveProduct = async (req, res) => {
    const { name, category, price, description, imageURL, manufacturer, availableItems } = req.body;
    Product.create({
        name: name,
        category: category,
        price: price,
        description: description,
        imageURL: imageURL,
        manufacturer: manufacturer,
        availableItems: availableItems
    }, function (error, result) {
        if (error) res.status(401).json('You are not authorized to access this endpoint!');
        else res.status(201).json({ Product: result });
    });

}

const updateProduct = async (req, res) => {
   
    const { id } = req.body.id;
   
    const { name, category, price, description, imageURL, manufacturer, availableItems } = req.body;
    if (id !== undefined) {
        
        const product = await Product.find({ id });
        product.name = name;
        product.category = category;
        product.price = price;
        product.description = description;
        product.imageURL = imageURL;
        product.manufacturer = manufacturer;
        product.availableItems = availableItems;

        Product.save();
        res.status(201).json({ Products: product })
    }
    else {
        res.status(401).json('You are not authorized to access this endpoint!');
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.body.id;
    Product.deleteOne({ id }, function (err, obj) {
        if (err) {
            console.log("You are not authorized to access this endpoint!")
        };
        console.log(`Product with ID - ${id} deleted successfully!`);
        db.close();
    });
}
module.exports = { findProducts, findProductById, findProductCategories, updateProduct, saveProduct, deleteProduct }
