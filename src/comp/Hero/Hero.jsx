import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import hero from "../pic/hero.jpg"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
  <>
  {/* <div className="white-gradient"/> */}
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              >
                Discover <br />
                Most Suitable
                <br /> Property
              </motion.h1>
            </div>
            <div className="flexColStart secondaryText flexhero-des">
              <span>Find a variety of properties that suit you very easilty</span>
              <span>Forget all difficulties in finding a residence for you</span>
            </div>
    
          
    
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>
    
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>
    
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} /> <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>

            </div>
            <div className="contact-icons">
        <a
        target="_blank"
          href="https://api.whatsapp.com/send?phone=+201066442142&text=Hello,%20more%20information"
      
          rel="noopener noreferrer"
          className="icon what"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon face"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/urfav_zezo0?igsh=dnBxbjIwMjRoYXFx"
          target="_blank"
          rel="noopener noreferrer"
          className="icon face"
        >
        <FaInstagram />
        </a>
      </div>
          </div>
    
          {/* right side */}
          <div className="flexCenter hero-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="image-container"
            >
              <img src={hero} alt="houses" />
            </motion.div>
          </div>
        </div>
      </section>
  </>
  );
};

export default Hero;
