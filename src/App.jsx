import { useState } from "react";
import "./App.css";
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import Header from "./container/header/Header";
import WhatGPT3 from "./container/whatGPT3/whatGPT3";
import Features from "./container/features/Features";
import Possibility from "./container/possibility/Possibility";
import Blog from "./container/blog/Blog";
import Footer from "./container/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
