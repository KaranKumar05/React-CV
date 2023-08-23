import React from "react";
import ReactDOM from "react-dom";

// Components 
import Header from './components/header.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js' 

function Main() {
  return <div>
            <Header />
            <About />
            <Contact />
            <Footer />  
        </div>
}
ReactDOM.render(<Main />, document.querySelector('#root'));