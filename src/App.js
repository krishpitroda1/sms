import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Resources from "./components/Resources";
import Blogs from "./components/Blogs";
import Apidoc from "./components/Apidoc";
import Stories from "./components/Stories";
import Test from "./components/Test";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Carrier from "./components/Carrier";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Products" element={<Products/>}></Route>
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Carrier" element={<Carrier/>} />
          <Route path="/Test" element={<Test/>} />
          <Route path="/Apidoc" element={<Apidoc/>} />
          <Route path="/Stories" element={<Stories/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          
           </Routes>
          
      </div>
      <Footer/>
    </div>
  );
}

export default App;
