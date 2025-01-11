import React, { useState } from "react";
import "./Render.css"; 
import doubledout from "../Assets/images/nav bar images/double1.png"
import doubledout2 from "../Assets/images/nav bar images/double2.png"
import image1 from "../Assets/images/nav bar images/Dev.jpg";
import image2 from "../Assets/images/nav bar images/front.jpeg";
import image3 from "../Assets/images/nav bar images/laptop.jpg";
import image4 from "../Assets/images/nav bar images/cartoon.jpg";
import image5 from "../Assets/images/nav bar images/boy.jpg";
import image6 from "../Assets/images/nav bar images/bird.jpg";
import image7 from "../Assets/images/nav bar images/bird2.avif";
import image8 from "../Assets/images/nav bar images/bird3.jpeg";
import image9 from "../Assets/images/nav bar images/bird4.jpg";
import image10 from "../Assets/images/nav bar images/bird5.jpg";
import image11 from "../Assets/images/nav bar images/Dev.jpg";
import image12 from "../Assets/images/nav bar images/front.jpeg";
import image13 from "../Assets/images/nav bar images/laptop.jpg";
import image14 from "../Assets/images/nav bar images/cartoon.jpg";

const ImageGrid = () => {
  const items = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    // image11,
    // image12,
    // image13,
    // image14,
  ];

  const texts = [
    "Developer's Workstation ",
    "Front-end Design",
    "Laptop Lifestyle",
    "Creative Cartoon",
    "Cool Boy Image",
    "Beautiful Bird “",
    "Bird in Flight",
    "Bird Perched on Branch Bird Perched on Branch Bird Perched on Branch Bird Perched on Branch Bird Perched on Branch ",
    "Exotic Bird",
    "Colorful Bird",
    // "Another Workstation",
    // "Another Front-end Design",
    // "Another Laptop View",
    // "Another Creative Cartoon",
  ];


  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));

  return (
    <>
      <h1 className="pt-5 text-white text-center text-3xl">What our clients say!</h1>
      <div className="wrapper flex items-center justify-center">
        <div className="items flex gap-2 perspective">
          {items.map((url, index) => (
            <div
              key={index}
              className={`item relative bg-cover bg-center cursor-pointer grayscale brightness-50 transition-all duration-500 ease-in-out ${
                index === activeIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${url})` }}
              onClick={() => setActiveIndex(index)} 
              tabIndex="0"
            >
             {index === activeIndex && (
  <div className="overlay absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-base font-bold p-2">
    <img src={doubledout} alt="" /> {texts[index]} <img src={doubledout2} alt="" />
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
