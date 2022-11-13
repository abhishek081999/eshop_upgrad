const User=(mongoose)=>{
    const UserSchema=mongoose.Schema({
        isAdmin:Boolean,
        name:String,
        email:String,
        password:String,
        contactNumber:Number,
        accesstoken:String,
        
},{timestamp:true})
    const User= mongoose.model('users',UserSchema)
    return User;
}
module.exports=User;