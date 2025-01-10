import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import Facebboklogo from "../../Assets/images/nav bar images/foxmind tech logo1.jpg";

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize 3D Scene with Three.js
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create Floating Sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: "#08fdd8", emissive: "#003f3f", metalness: 0.7, roughness: 0.2 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Add Moving Stars Background
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      stars.rotation.y += 0.002;
      stars.rotation.x += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    camera.position.z = 5;
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden" id="Footer">
      {/* Canvas for Three.js */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-16 md:px-12 lg:px-24 d-flex justify-content-center align-items-center flex-column">
        {/* Footer Content */}
        <div className="footer-content text-center md:text-left">
          <div className="bg-gray-800 bg-opacity-60 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-cyan-400 mb-6">
              Step into the Future
            </h3>
            <p className="text-gray-300 text-lg mb-2">
              Empowering technology with FoxMindTech. Connect with us to explore limitless possibilities.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {/* Social Icons */}
            <a href="#facebook" className="social-icon group" title="Facebook">
              <span className="group-hover:hidden text-gray-300 text-2xl transition transform hover:scale-125">F</span>
              <img
                src={Facebboklogo}
                alt="Facebook"
                className="group-hover:block hidden w-8 h-8 transition transform hover:scale-125"
              />
            </a>
            <a href="#twitter" className="social-icon group" title="Twitter">
              <span className="group-hover:hidden text-gray-300 text-2xl transition transform hover:scale-125">T</span>
              <img
                src={Facebboklogo}
                alt="Twitter"
                className="group-hover:block hidden w-8 h-8 transition transform hover:scale-125"
              />
            </a>
            <a href="#instagram" className="social-icon group" title="Instagram">
              <span className="group-hover:hidden text-gray-300 text-2xl transition transform hover:scale-125">I</span>
              <img
                src={Facebboklogo}
                alt="Instagram"
                className="group-hover:block hidden w-8 h-8 transition transform hover:scale-125"
              />
            </a>
            <a href="#linkedin" className="social-icon group" title="LinkedIn">
              <span className="group-hover:hidden text-gray-300 text-2xl transition transform hover:scale-125">L</span>
              <img
                src={Facebboklogo}
                alt="LinkedIn"
                className="group-hover:block hidden w-8 h-8 transition transform hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-16 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FoxMindTech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
