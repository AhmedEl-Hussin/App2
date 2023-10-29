
import { Component } from "react";
import Recipes from "../Recipes/Recipes.jsx";
import Testomntal from "../Testomntal/Testomntal.jsx";
import Contact from "../Contact/Contact.jsx";
import Home from "../Home/Home.jsx";
import Work from "../Work/Work.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";


export default class App extends Component{

  state = {
  }

  render(){
    return (
      <>

      <Home/>
      <Work/>
      <About/>
      <Recipes/>
      <Testomntal/>
      <Contact/>
      <Footer/>

      </>
    )
  }
}