import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import "./Header.scss";

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

  // const downloadFileAtUrl = (url) => {
  //   fetch(url)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const blobUrl = window.URL.createObjectURL(new Blob([blob]));
  //       const filename = url.split("/").pop();
  //       const aTag = document.createElement("a");
  //       aTag.href = blobUrl;
  //       aTag.setAttribute("download", filename);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //     });
  // };
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
            href="https://drive.google.com/file/d/15eHzaku_UIYRcUm5bWJEZEcAy9cztDtd/view?usp=sharing"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
