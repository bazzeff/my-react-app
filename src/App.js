import { Fragment } from 'react';
import './App.css';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { Routes, Route, Link } from "react-router-dom";

function App() {  
  return (
      <div> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Intro />
    <About /> 
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;
