// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ParallaxSection = () => {
//   const { scrollYProgress } = useScroll();

//   // Adjust image positions based on scroll
//   const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
//   const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

//   return (
//     <div style={{ height: "200vh", position: "relative", overflow: "hidden" }}>
//       {/* Background */}
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           background: "url('path-to-background-image.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Text Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           padding: "100px 20px",
//           color: "white",
//         }}
//       >
//         <h1>Turning Ideas Into Unique Tech Solutions For A Smarter Tomorrow</h1>
//       </div>

//       {/* Image 1 */}
//       <motion.img
//         src="path-to-image-1.jpg"
//         alt="Image 1"
//         style={{
//           position: "absolute",
//           top: "20%",
//           left: "10%",
//           width: "20%",
//           transform: image1Y,
//         }}
//       />

//       {/* Image 2 */}
//       <motion.img
//         src="path-to-image-2.jpg"
//         alt="Image 2"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "70%",
//           width: "20%",
//           transform: image2Y,
//         }}
//       />
//     </div>
//   );
// };

// export default ParallaxSection;
