const Addresses=(mongoose)=>{
      const AddressesSchema=mongoose.Schema({
          name:String,
          city:String,
          state:String,
          street:String,
          contactNumber:Number,
          landmark:String,
          zipCode:Number,
          createdAt:{
            type:Date,
            default:()=>Date.now(), //providing default value
            immutable:true, //if try to update this field cannot update
          },
          updatedAt:{
            type:Date,
            default:()=>Date.now(), //providing default value
            immutable:true, //if try to update this field cannot update
          },
          user:{
            type:mongoose.SchemaTypes.ObjectId, //here one to one relationship
            ref:"users"                       //with Profie collections by provding
        } 

      },{timestamp:true})
      const Addresses= mongoose.model('addresses',AddressesSchema)
      return Addresses;
}
module.exports=Addresses;