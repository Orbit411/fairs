import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import Lottie from "lottie-react";
import planet from "../../anm/planetlogo.json";
import marketing from "../../anm/marketing.json";
import Advertisement from "../../anm/Advertisement.json";
import print from "../../anm/print.json";
import design from "../../anm/Graphic Design.json"
import digital from "../../anm/Digital Creator.json";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="top">
        {" "}
        <h1 data-text="Our Services" className="top-title">
          Our Services
        </h1>
      </div>

      <div id="services" className="services">
        <div className="all d-flex">
          <div className="serv">
            <h3>Marketing</h3>
            <Lottie
              style={{ height: 150, width: 150 }}
              animationData={marketing}
            />
          </div>
          <div className="serv">
            <h3>Advertisement</h3>
            <Lottie
              style={{ height: 150, width: 150 }}
              animationData={Advertisement}
            />
          </div>
          <div className="serv">
            <h3>Printing</h3>
            <Lottie style={{ height: 150, width: 150 }} animationData={print} />
          </div>
          <div className="serv">
            <h3>Graphic Design</h3>
            <Lottie
              style={{ height: 150, width: 150 }}
              animationData={design}
            />
          </div>
          <div className="serv">
            <h3>Digital Creator</h3>
            <Lottie
              style={{ height: 150, width: 150 }}
              animationData={digital}
            />
          </div>
        </div>
      </div>
      <div className="break"></div>
    </motion.div>
  );
};

export default Services;
