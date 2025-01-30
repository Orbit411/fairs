import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Img from "../pic/hero.jpg";

function Projects() {
  const images = [
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
    { src: Img, title: "Awesome Image", category: "photography" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="top">
        <h1 data-text="Our Services" className="top-title">
          Projects
        </h1>
      </div>
      <div className="portfolio">
        <div>
          <ul className="shuffle">
            <li className="active">All</li>
            <li>App</li>
            <li>Photo</li>
            <li>Web</li>
            <li>Print</li>
          </ul>
        </div>
        <div className="imgs-container">
          {images.map((image, index) => (
            <div className="box" key={index}>
              <img src={image.src} alt={image.title} />
              <div className="caption">
                <h4>{image.title}</h4>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
