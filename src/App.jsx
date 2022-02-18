import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import { Routes, Route } from "react-router-dom";
import Hello from "./Hello";

const App = () => {
  return (
    <>
      <HeaderComponent fullName={"Anastasiya Chypyha"} />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
