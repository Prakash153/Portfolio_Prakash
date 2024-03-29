import React from "react";
import { About, Header, Footer, Skills, Work } from "./container/index";

import { Navbar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />

      <Skills />

      <Footer />
    </div>
  );
};

export default App;
