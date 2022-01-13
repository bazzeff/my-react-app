import { Fragment } from 'react';
import './App.css';
import { useContext } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList"; 
import Toggle from "./components/toggle/Toggle";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "./context";

function App() {   
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <header className="h-header">
       <nav className="h-nav">
        <Link className="h=link" to="/">Home</Link>
        <Link className="h-link" to="/about">About</Link>
        <Link className="h-link" to="/product">Product</Link>
        <Link className="h-link" to="/contact">Contact</Link>
      </nav>
      </header> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toggle />
    <Intro />
    <About /> 
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;
