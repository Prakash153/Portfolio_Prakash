import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
import "./Header.scss";
// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };
const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Prakash", "Coder", "Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="app__header app__flex">
      {/* The x property defines a range of motion for the element along the horizontal axis, with values going from -100 (left) to 0 (centered) */}
      {/* The opacity property defines the opacity of the element during the animation, which could also have a range of values based on your specific animation. */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div>
          <p>Hey there, 👋</p>
          <h3>
            I'am <span ref={typedRef}></span>
          </h3>

          <p>
            Welcome to my portfolio, a digital reflection of my passions and
            expertise. Come on in, take a look around, and let's create
            something amazing together.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1sfRBJjFxSIIsrz28UgA7DkwrGNs0U2zT"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
      {/* 
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
        >
        <img src={images.profile} alt="progile_bg" />
        <motion.img
        whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
          />
        </motion.div> */}
      {/* 
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
      
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
        <img src={circle} alt="circle" />
        </div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default AppWrap(Header, "home");
