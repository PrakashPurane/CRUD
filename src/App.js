import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/singeProduct/SingleProduct";
import AddProduct from "./pages/addProduct/AddProduct";
import EditProduct from "./pages/editProduct/EditProduct";

function App() {
  return <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/product/" element={<SingleProduct/>} />
  <Route path="/addProduct" element={<AddProduct/>} />
  <Route path="/editProduct/id" element={<EditProduct/>} />

 </Routes>
 </BrowserRouter>

  
  </>;
}

export default App;
