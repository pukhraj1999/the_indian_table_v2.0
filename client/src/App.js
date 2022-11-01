import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menus from "./pages/Menus/Menus";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menus" element={<Menus />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
