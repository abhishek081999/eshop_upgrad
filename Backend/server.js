const express =require ("express");
const cors=require('cors')
const db=require("./app/models/index")

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 

const app=express();
app.use(cors());
app.use(express.json())
require("./app/routes/addresses.routes")(app);
require("./app/routes/orders.routes")(app);
require("./app/routes/products.routes")(app);
require('./app/routes/user.routes')(app);

const port=8000;

app.listen(port,()=>{
 console.log("server started");
})