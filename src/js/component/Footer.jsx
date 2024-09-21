import React from "react";
import image from "../../img/imageFooter.jpg";

const Footer = () => {
  return (
    <div className="footerStyle ">
      <img className="imageFooter" src={image} />
      <h1 className="my-4">Vicente Torres</h1>
      <h4>&#123; Programador Full Stack &#125;</h4>
    </div>
  );
};

export default Footer;
