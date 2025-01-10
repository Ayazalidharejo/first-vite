import React, { useEffect, useRef } from "react";
import "./ServicePage.css";
import * as THREE from "three";
import dev from "../Assets/images/nav bar images/Dev.jpg";
import laptop from "../Assets/images/nav bar images/laptop.jpg";
import cartoon from "../Assets/images/nav bar images/cartoon.jpg";
import boy from "../Assets/images/nav bar images/boy.jpg";
// Import only the first 4 images
import img1 from "../Assets/images/nav bar images/Dev.jpg";
import img2 from "../Assets/images/nav bar images/bird.jpg";
import img3 from "../Assets/images/nav bar images/bird4.jpg";
import img4 from "../Assets/images/nav bar images/Dev.jpg";

const ServicePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0.7,
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    camera.position.z = 5;
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <div className="section">
        <p className = "text-center text-white pt-5 fs-1 fw-bold">Service</p>
        <div className="section-wrapper">
          <div className="content-wrapper">
            {contentData.map((content, index) => (
              <div className={`content content-${index + 1}`} key={index}>
                <div className="meta">
                  <h4 className="desc text-white">{content.description}</h4>
                  <h4 className="desc text-white ">{content.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="visual">
            <div className="card-wrapper">
              {contentData.map((content, index) => (
                <div className={`card card-${index + 1}`} key={index}>
                  <img
                    className="card-img"
                    src={content.imgSrc}
                    alt={content.imgAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Only include the first 4 items in contentData
const contentData = [
  {
    imgSrc: dev,
    imgAlt: "developer",
    title: "Afra Yayah",
    description: "Chief Creative Officer",
  },
  {
    imgSrc: laptop,
    imgAlt: "laptop",
    title: "Innovative Technology Solutions",
    description: "Ux/Ui Designer",
  },
  {
    imgSrc: cartoon,
    imgAlt: "cartoon character",
    title: "Master the Art of Magic",
    description: "A magical journey through coding and design.",
  },
  {
    imgSrc: boy,
    imgAlt: "agile warrior",
    title: "Kashif Developer",
    description: "Frontend development.",
  },
];

export default ServicePage;
