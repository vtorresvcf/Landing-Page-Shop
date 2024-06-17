import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
