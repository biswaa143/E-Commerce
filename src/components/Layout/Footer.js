import React from "react";

import classes from "./Footer.module.css";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { SlSocialSpotify } from "react-icons/sl";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.brandname}>
        <h1>The Generics</h1>
      </div>
      <div className={classes.icons}>
        <span className="yt">
          <AiOutlineYoutube color="red" fontSize={"40px"}></AiOutlineYoutube>
        </span>
        <span className="spotify">
          <SlSocialSpotify color="green" fontSize={"40px"}></SlSocialSpotify>
        </span>
        <span className="fb">
          <AiOutlineFacebook  color="blue" fontSize={"40px"}></AiOutlineFacebook>
        </span>
      </div>
    </div>
  );
};
export default Footer;
