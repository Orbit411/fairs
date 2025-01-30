import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import Lottie from "lottie-react";
import planet from "../../anm/planetlogo.json";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="top">  <h1 data-text="Our Services" className="top-title">Our Services</h1></div>
    
      <div id="services" className="services">
        <div className="all d-flex">
          <div className="serv">
            <h3>weza</h3>
            <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
          </div>
          <div className="serv">
            <h3>weza</h3>
            <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
          </div>
          <div className="serv">
            <h3>weza</h3>
            <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
          </div>
          <div className="serv">
            <h3>weza</h3>
            <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
          </div>
          <div className="serv">
            <h3>weza</h3>
            <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
          </div>
        </div>
        
      </div>
      <div className="break"></div>
    </motion.div>
  );
};

export default Services;
