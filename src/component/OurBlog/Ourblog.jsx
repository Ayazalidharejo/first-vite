import React from "react";
import './Ourblog.css'; // Make sure the CSS is imported
import img1 from "../Assets/images/nav bar images/Dev.jpg"
import img2 from "../Assets/images/nav bar images/Dev.jpg"
import img3 from "../Assets/images/nav bar images/Dev.jpg"
import img4 from "../Assets/images/nav bar images/Dev.jpg"

function Ourblog() {
  return (
    <> <h1 className="d-flex justify-content-center text-center w-100  text-white">
    Our Blog
  </h1>
  
    <div className="blog-wrapper">
      
      <div className="blog-item">
        <div className="container">
          <div
            className="front"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="inner">
              <p>Developer</p>
              <span>Developer</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="container">
          <div
            className="front"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="inner">
              <p>Developer</p>
              <span>Developer</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="container">
          <div
            className="front"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="inner">
              <p>uiux desiner</p>
              <span>Desiner</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="container">
          <div
            className="front"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="inner">
              <p>Developer</p>
              <span>Developer</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ourblog;
