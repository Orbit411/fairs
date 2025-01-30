import React, { useState } from "react";
import { motion } from "framer-motion";
import p1 from "../pic/hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Img1 from "../pic/p1.jpg";
import Img2 from "../pic/p2.jpg";
import Img3 from "../pic/p3.jpg";
import Img4 from "../pic/p4.jpg";
import Img5 from "../pic/p5.jpg";

const images = [Img1 , Img2, Img3, Img4, Img5];

const Slider = () => {
  return (
    <>
      {" "}
      <motion.div
        className="slider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3,delay:.5 }}
        style={{ margin: "10px auto 100px", width: "100%", maxWidth: "1500px" }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          style={{ padding: "50px 0 100px" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  className="image-slider"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: isActive ? 1 : 0.85 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: "100%",
                    maxWidth: isActive ? "500px" : "400px",
                    margin: "0 auto",
                    borderRadius: "10px",
                    position: "relative",
                    boxShadow:
                      "4px 4px 10px rgba(255, 168, 0, 0.6), -4px -4px 10px rgba(255, 168, 0, 0.6)",
                  }}
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      display: "block",
                    }}
                    src={image}
                    alt={`Slide ${index}`}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      position: "absolute",
                      bottom: "-100%",
                      width: "100%",
                      height: "100%",
                      transform: "scaleY(-1)",
                      opacity: 0.5,
                      filter: "blur(5px)",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        display: "block",
                      }}
                      src={image}
                      alt={`Reflection ${index}`}
                    />
                  </motion.div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="break"></div>
      </motion.div>
      
    </>
  );
};

export default Slider;
