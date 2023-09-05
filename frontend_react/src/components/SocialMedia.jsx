import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaVoicemail } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="mailto:roshaan.khan182@gmail.com">
      <AiOutlineMail />
    </a>
    <a href="tel:+923139517192">
      <BsFillTelephoneFill />
    </a>
    <a href="https://www.linkedin.com/in/roshan-kaleem-5631a31ba/" target="_blank">
      <BsLinkedin />
    </a>
    <a href="https://github.com/RoshanKaleem" target="_blank">
      <AiFillGithub />
    </a>
  </div>
);

export default SocialMedia;
