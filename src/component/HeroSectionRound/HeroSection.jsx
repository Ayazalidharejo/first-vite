import React, { useEffect, useRef } from 'react';
import "./Hero.css"

const HeroSectiony = () => {
  const texts = [
    'Frontend', 'Backend', 'UI/UX ', 'Design',
    'Full Stack', 'Mobile App',
    'Data Science', 'Cyber', 'security', 'Cloud', 'Computing',
    'Game', 'Development', 'Artificial', 'Intelligence',
    'DevOps', 'Blockchain',
    'Frontend', 'Backend', 'UI/UX ', 'Design',
    'Full Stack', 'Mobile App',
    'Data Science', 'Cyber', 'security', 'Cloud', 'Computing',
    'Game', 'Development', 'Artificial', 'Intelligence',
    'DevOps', 'Blockchain',
    'Frontend', 'Backend', 'UI/UX ', 'Design',
    'Full Stack', 'Mobile App',
    'Data Science', 'Cyber', 'security', 'Cloud', 'Computing',
    'Game', 'Development', 'Artificial', 'Intelligence',
    'DevOps', 'Blockchain',

  ];

  const sphereRef = useRef(null);

  useEffect(() => {
    // Ensure script is only added once
    if (!window.TagCloud) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
      script.onload = () => {
        // Initialize the tag cloud only once after script loads
        const tagCloudInstance = window.TagCloud(sphereRef.current, texts, {
          radius: 250,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          direction: 135,
          keep: true
        });

        // Set color for each text in the sphere
        const color = '#FB773F';
        sphereRef.current.style.color = color;
        sphereRef.current.style.backgroundColor = 'transparent';
        sphereRef.current.style.textAlign = 'center';
      };
      document.body.appendChild(script);

      // Cleanup function to remove the script and cleanup tagCloud on unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [texts]); // Adding texts as dependency to prevent unnecessary re-renders

  return (
    <>
      <div >
        <div className='row d-flex align-items-center justify-content-between'>
          <div className='col-md-6 col-xs-12 '>
            <div className="body ">
              <span ref={sphereRef} className="Sphere ms-5"></span>
            </div>
          </div>

          <div className='col-md-6 col-xs-12 text-center'>
            <div className="text " data-content="FoxMindTech">
              FoxMindTech
            </div>
            <div >
              <h2 className='text-start text-white ms-5'>We craft impactful digital experiences and empower businesses to improve efficiency, stay competitive, and achieve meaningful success.</h2><br />
            </div>
           <div className='text-start ps-12 '> <button className='rounded bg-[#FB773F66] text-white px-7 py-2  '>Get a Quote</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectiony;
