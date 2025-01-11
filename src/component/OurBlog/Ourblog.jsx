import React from "react";
import './Ourblog.css'; // Make sure the CSS is imported
import img1 from "../Assets/images/nav bar images/Dev.jpg";
import img2 from "../Assets/images/nav bar images/Dev.jpg";
import img3 from "../Assets/images/nav bar images/Dev.jpg";
import img4 from "../Assets/images/nav bar images/Dev.jpg";
import image5 from "../Assets/images/nav bar images/start1.png"; 
function Ourblog() {
  return (
    <>
      <h1 className="d-flex justify-content-center text-center w-100 text-white">
        Our Blog
      </h1>

      <div className="blog-wrapper">
        {/* Card 1 */}
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
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="inner">
                <p>UI/UX Designer</p>
                <span>Designer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="inner">
                <p>Web Developer</p>
                <span>Developer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="inner">
                <p>App Developer</p>
                <span>Mobile Developer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="inner">
                <p>Backend Developer</p>
                <span>Developer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="inner">
                <p>Frontend Developer</p>
                <span>Developer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="inner">
                <p>Web Designer</p>
                <span>Designer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="inner">
                <p>Software Engineer</p>
                <span>Engineer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="inner">
                <p>System Analyst</p>
                <span>Analyst</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="inner">
                <p>Cloud Engineer</p>
                <span>Engineer</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="inner">
                <p>Security Expert</p>
                <span>Expert</span>
              </div>
            </div>
            <div className="back">
            <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div className="blog-item">
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="inner">
                <p>AI Specialist</p>
                <span>Specialist</span>
              </div>
            </div>
            <div className="back">
              <div className="inner flex justify-center items-center flex-col">
              <img src={image5} alt="code" />
              <h4 className="pt-3">Web Development</h4>
                <p className="text-lg  pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourblog;
