import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/prakash15/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/_prakash151/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
