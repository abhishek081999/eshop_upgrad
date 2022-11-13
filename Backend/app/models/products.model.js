const Products = (mongoose)=> {

const ProductSchema=mongoose.Schema({
    name:String,
    category:String,
    manufacturer:String,
    availableItems:Number,
    price:Number,
    imageURL:String,
    description:String,
    updatedAt:Date,
    createdAt:Date

},{timestamp:true});
 
const Products=mongoose.model("products",ProductSchema);
return Products;
}
module.exports=Products;