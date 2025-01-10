import React, { useState } from 'react';
import './Galery.css';
import logo from "../Assets/images/nav bar images/Dev.jpg"; // Ensure the correct image path

// Panel Component
const Panel = ({ backgroundImage, title, description, isActive, isHovered, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`panel ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3>{title}</h3>
      {/* Show the description only when the panel is both active and hovered */}
      {isActive && isHovered && (
        <div className="panel-details">
          <h4>{description.title}</h4>
          <span>{description.text}</span>
        </div>
      )}
    </div>
  );
};

// Galery Component
const Galery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered index

  const panels = [
    {
      image: logo,
      // title: 'Explore the World',
      description: {
        // title: 'Details of the Image 1',
        text: 'This is a detailed description of the first image, '
      }
    },
    {
      image: logo,
      // title: 'Discover New Places',
      description: {
        // title: 'Details of the Image 2',
        text: 'This is a detailed description of the second image, '
      }
    },
    {
      image: logo,
      // title: 'Adventure Awaits',
      description: {
        // title: 'Details of the Image 3',
        text: 'This is a detailed description of the third image, '
      }
    },
    {
      image: logo,
      // title: 'Journey to the Unknown',
      description: {
        // title: 'Details of the Image 4',
        text: 'This is a detailed description of the fourth image, '
      }
    },
    {
      image: logo,
      // title: 'Make Memories',
      description: {
        // title: 'Details of the Image 5',
        text: 'This is a detailed description of the fifth image, '
      }
    }
  ];

  const handlePanelClick = (index) => {
    setActiveIndex(index); // Set the clicked panel as active
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the hovered index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index
  };

  return (
    <>
    <h1 className='text-white'>About us</h1>
    <div className="container">
      
      {panels.map((panel, index) => (
        <Panel
          key={index}
          backgroundImage={panel.image}
          title={panel.title}
          description={panel.description}
          isActive={index === activeIndex} 
          isHovered={index === hoveredIndex} 
          onClick={() => handlePanelClick(index)} 
          onMouseEnter={() => handleMouseEnter(index)} 
          onMouseLeave={handleMouseLeave} // Handle hover leave
        />
      ))}
    </div>
    </>
  );
};

export default Galery;
