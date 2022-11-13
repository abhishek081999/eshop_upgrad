const Order=(mongoose)=>{
    const OrderSchema=mongoose.Schema({
        address:{
            type:mongoose.SchemaTypes.ObjectId
        },
        product:{
            type:mongoose.SchemaTypes.ObjectId
        },
        quantity:Number,
        user:{
            type:mongoose.SchemaTypes.ObjectId
        },
       
     },{timestamp:true})
    const Order= mongoose.model('orders',OrderSchema)
    return Order;
}
module.exports=Order;