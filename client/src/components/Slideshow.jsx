import React from "react";
import "./Slideshow.css";
import img1 from "../images/image-1.jpg";
import img2 from "../images/image-2.jpg";
import img3 from "../images/image-3.jpg";
import img4 from "../images/image-4.jpg";
import img5 from "../images/image-5.jpg";
import img6 from "../images/image-6.jpg";
import img7 from "../images/image-7.jpg";

function Slideshow() {
  return (
    <div className="food-gallery">
        {/* <div className="slider"> */}
      <div className="food-pics">
        <img src={img1} alt="" className="food" />{" "}
      </div>
      <div className="food-pics">
        {" "}
        <img src={img2} alt="" className="food" />{" "}
      </div>
      <div className="food-pics">
        {" "}
        <img src={img3} alt="" className="food" />{" "}
      </div>
      <div className="food-pics">
        {" "}
        <img src={img4} alt="" className="food" />
      </div>
      <div className="food-pics">
        {" "}
        <img src={img5} alt="" className="food" />{" "}
      </div>
      <div className="food-pics">
        {" "}
        <img src={img6} alt="" className="food" />
      </div>
      <div className="food-pics">
        {" "}
        <img src={img7} alt="" className="food" />
      </div>
      </div>
    // </div>
  );
}

export default Slideshow;
