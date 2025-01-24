import React from "react";
import "./App.css";
import "./Styles/global.css";
import "./Styles/color.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
