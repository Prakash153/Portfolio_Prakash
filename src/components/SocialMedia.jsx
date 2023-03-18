import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/yourusername">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_prakash151/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yourusername/">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
