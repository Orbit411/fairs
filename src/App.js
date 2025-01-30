import './App.css';
import Nav from './comp/nav';
import Hero from './comp/Hero/Hero';
import Slider from './comp/slider/slider';
import Services from './comp/Services/services';
import Projects from "./comp/Projects/Projects";
import { useEffect, useState } from 'react';
import logo from "./comp/pic/logo.png";
import Lottie from 'lottie-react';
import loader from "./anm/loading.json";
import { motion } from 'framer-motion';  // استيراد motion من Framer Motion

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // إخفاء الـ Spinner بعد 3 ثوانٍ
    }, 3000); // 3000 ميلي ثانية (3 ثوانٍ)

    // تنظيف التايمر إذا تم تدمير الكومبوننت
    return () => clearTimeout(timer);
  }, []);

  // إعدادات الرسوم المتحركة للـ loader والمحتوى
  const loaderAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  const contentAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <>
      {loading ? (
        <motion.div
          className="loading-spinner"
          style={{ minWidth: "100%", height: "100vh", margin: "0 auto", display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}
          initial="hidden"
          animate="visible"
          variants={loaderAnimation}
        >
          <div className="image-loader"><img src={logo} alt="" /></div>
          <Lottie style={{ height: 80, width: 80 }} animationData={loader} />
        </motion.div>
      ) : (
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={contentAnimation}
        >
          <Nav />
          <Hero />
          <Slider />
          <Services />
          <Projects />
        </motion.div>
      )}
    </>
  );
}

export default App;
