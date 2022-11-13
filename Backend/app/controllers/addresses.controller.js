const {Addresses}=require("../models/index")


const AddAddresses=async(req,res)=>{
   
    const {zipCode,contactNumber,name,city,street,state,landmark}=req.body;
    Addresses.create({
        zipCode:zipCode,
        contactNumber:contactNumber,
        name:name,
        city:city,
        street:street,
        landmark:landmark,
       state:state
   },function(error, result) {
       if(error) res.status(401).json('You are not authorized to access this endpoint!');
       else res.status(201).json({Addresses: result});
   });
   
}
module.exports={AddAddresses}