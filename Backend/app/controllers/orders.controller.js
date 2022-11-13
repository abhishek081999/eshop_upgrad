const {Order}=require("../models/index")

const findOrder=async(req,res)=>{
  
    if (req.body.productId === undefined||req.body.addressId===undefined) {
        
            res.status(404).json({ success: false, msg: "No Product found for ID !" });
        
    } else {
     
        
        Order.find(req.body).then((data)=>{
            res.status(200).json({success:true,Orders:data})
        }).catch((err) => {
            res.status(500).json({ success: false, msg: err });
        });
    }
    


}
module.exports={findOrder}