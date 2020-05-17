import React from "react";
import "./Slideshow.css";
import img1 from "../images/image-1.jpeg";
import img2 from "../images/image-2.jpeg";
import img3 from "../images/image-3.jpeg";
import img4 from "../images/image-4.jpeg";
import img5 from "../images/image-5.jpeg";
import img6 from "../images/image-6.jpeg";
import img7 from "../images/image-7.jpeg";
import img8 from "../images/image-8.jpeg";
import img9 from "../images/image-9.jpeg";

function Slideshow() {
  return (
    <div className="food-gallery">
      <div className="food-pics">
        <div className="img1">
          <img src={img1} alt="" className="food" />
        </div>
        <div className="img2">
          <img src={img2} alt="" className="food" />
        </div>
        <div className="img3">
          {" "}
          <img src={img3} alt="" className="food" />
        </div>
      </div>

      <div className="food-pics">
          <div className="img4">
        <img src={img4} alt="" className="food" /></div>
<div className="img5">
        <img src={img5} alt="" className="food" /></div>
<div className="img6">
        <img src={img6} alt="" className="food" /></div>
      </div>
      <div className="food-pics">
          <div className="img7">
        <img src={img7} alt="" className="food" /></div>
<div className="img8">
        <img src={img8} alt="" className="food" /></div>
        <div className="img9">
        <img src={img9} alt="" className="food" /></div>
      </div>
    </div>
  );
}

export default Slideshow;
