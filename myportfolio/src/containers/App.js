import React from "react";
import "./App.css";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import MyServices from "../components/MyServices";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";

function App() {
  return (
    <div classNameName="App">
      <Header />
      <Introduction />
      <MyServices />
      <MyWork />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
