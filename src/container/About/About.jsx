import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className=" head-text about-text">
        Coding is the art of
        <br />
        turning <span>complexity</span> into <span>simplicity.</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <a href={about.profileLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="app__profile-title" style={{ marginTop: 4 }}>
                {about.title}
              </h2>
            </motion.div>
          </a>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__blackbg"
);
