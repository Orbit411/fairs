import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Img1 from "../pic/p1.jpg";
import Img2 from "../pic/p2.jpg";
import Img3 from "../pic/p3.jpg";
import Img4 from "../pic/p4.jpg";
import Img5 from "../pic/p5.jpg";
import Img6 from "../pic/p1.jpg"; // إضافة صور إضافية
import Img7 from "../pic/p2.jpg"; 


function Projects() {
  const images = [
    { src: Img1, title: "Awesome Image", category: "photography" },
    { src: Img2, title: "Awesome Image", category: "photography" },
    { src: Img3, title: "Awesome Image", category: "photography" },
    { src: Img4, title: "Awesome Image", category: "photography" },
    { src: Img5, title: "Awesome Image", category: "photography" },
    { src: Img6, title: "Awesome Image", category: "photography" },
    { src: Img7, title: "Awesome Image", category: "photography" },
  
  ];

  const [visibleImages, setVisibleImages] = useState(4); // عرض أول 4 صور

  const handleLoadMore = () => {
    setVisibleImages(prev => prev + 4); // إضافة 4 صور عند الضغط
  };

  const allImagesVisible = visibleImages >= images.length; // التحقق مما إذا كانت جميع الصور قد ظهرت

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
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
          {images.slice(0, visibleImages).map((image, index) => (
            <motion.div
              className="box"
              key={index}
              initial={{ opacity: 0, y: 50 }} // البداية: مموهة وأسفل الشاشة
              animate={{ opacity: 1, y: 0 }} // الأنميشن: يظهر ويصعد للموضع الأصلي
              transition={{
                duration: 0.6,
                delay: index * 0.2, // التأخير بين العناصر
                type: "spring", // نوع الحركة (التأرجح)
                stiffness: 100, // قوة التأرجح
              }}
            >
              <img src={image.src} alt={image.title} />
              <div className="caption">
                <h4>{image.title}</h4>
                <p>{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      
      </div>
      {!allImagesVisible && (
        <div style={{ width:"100%",textAlign:'center',margin:"30px 0"  }}>
            <button className="load-more" onClick={handleLoadMore}>
              More
            </button>
        </div>
        )}
    </motion.div>
  );
}

export default Projects;
