import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/header.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Services from "./components/services.js";
import Portfolio from "./components/portfolio.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

function Main() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Main />, document.querySelector("#root"));
