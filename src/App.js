import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/home.js";
import Projects from "./components/projects";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from './components/footer.js'
import Blog from "./components/homePage/blog.js";


function App() {
  return (
    <Router>
    <div className="App">

    <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}> </Route>

      </Routes>
      <Footer/>



    </div>
    </Router>
  );
}

export default App;
