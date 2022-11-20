import { makeStyles } from "@material-ui/core";

import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./components/home/Home";
import Login from "./components/Login";
import ProductDetail from "./components/productDetail/ProductDetail";
import Register from "./components/Register";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
 
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/productdetails/:name' element={<ProductDetail/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
