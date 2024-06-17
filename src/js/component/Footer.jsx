import React from "react";
import image from "../../img/imageFooter.jpg";

const Footer = () => {
  return (
    <div className="footerStyle ">
      <img className="imageFooter" src={image} />
      <h1>Vicente Torres</h1>
      <p>Página web realizada para el proyecto de Landing Page con React.</p>
    </div>
  );
};

export default Footer;
