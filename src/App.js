import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/home.js";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from './components/footer.js'
import Blog from "./components/homePage/blog.js";
import Contact from "./components/contact.js";
import Services from "./components/services.js";
import Blogdetails from "./components/blogdetails.js";

function App() {
  return (
    <Router>
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}> </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blogdetails" element={<Blogdetails />}></Route>

      </Routes>
      <Footer/>



    </div>
    </Router>
  );
}

export default App;
