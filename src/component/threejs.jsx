import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSComponent = () => {
  const mountRef = useRef(null); // Reference to the DOM node

  useEffect(() => {
    // Create a Scene
    const scene = new THREE.Scene();

    // Load Background Texture
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load("/images/front.jpeg");
    scene.background = backgroundTexture;

    // Create a Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load Textures for Each Face of the Cube
    const materials = [
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/top.jpeg"), // Front face
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/front.jpeg"), // Back face
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/back.jpeg"), // Top face
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/top.jpeg"), // Bottom face
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/front.jpeg"), // Left face
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("/images/back.jpeg"), // Right face
      }),
    ];

    // Create the Cube Geometry and Apply Textures
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Component Unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "relative",
        overflow: "hidden", // Ensure no scrollbars appear
        width: "100%",
        height: "100vh", // Cover the full viewport height
      }}
    >
      {/* The Three.js scene will be rendered here */}
    </div>
  );
};

export default ThreeJSComponent;
