import React from "react";
import BannerImage from "../Assets/banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Making Kids Fall in Love with Math!
          </h1>
          <p className="primary-text">
            Book your FREE class with age group
          </p>
          <div className="button-row">
            {[3, 4, 5, 6].map((age) => (
              <button key={age} className="square-button">
                age-{age}
              </button>
            ))}
          </div>
          <div className="button-row">
            {[7, 8].map((age) => (
              <button key={age} className="square-button">
                age-{age}
              </button>
            ))}
          </div>
          <button className="secondary-button">
            Book a Free Live Class{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
  
};

export default Home; // This should be at the top level
