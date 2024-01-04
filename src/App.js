// App.js

import React from "react";

import Navbar from "./components/Navbar.js";
import { ImageData } from "./components/JsonData.js";
import Spacer from "./components/Spacer.js";
import ImageSliderAuto from "./components/ImageSliderAuto.js";
import Tagline from "./components/Tagline.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Spacer height="125px" />
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={5000} />
      <Tagline />

      <Gallery />

      <Footer />
    </>
  );
}

export default App;
