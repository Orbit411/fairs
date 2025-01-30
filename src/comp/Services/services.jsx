import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import Lottie from "lottie-react";
import planet from "../../anm/planetlogo.json";
import marketing from "../../anm/marketing.json";
import Advertisement from "../../anm/Advertisement.json";
import print from "../../anm/print.json";
import design from "../../anm/Graphic Design.json";
import digital from "../../anm/Digital Creator.json";

const Services = () => {
  const services = [
    { title: "Marketing", animation: marketing },
    { title: "Advertisement", animation: Advertisement },
    { title: "Printing", animation: print },
    { title: "Graphic Design", animation: design },
    { title: "Digital Creator", animation: digital },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="top">
        <h1 data-text="Our Services" className="top-title">
          Our Services
        </h1>
      </div>

      <div id="services" className="services">
        <div className="all d-flex">
          {services.map((service, index) => (
            <motion.div
              className="serv"
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.6, // تأخير تدريجي بين كل خدمة
              }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <Lottie
                style={{ height: 150, width: 150 }}
                animationData={service.animation}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="break"></div>
    </motion.div>
  );
};

export default Services;
