import React from "react";
import "../Styles/Main.css";
import { FaStar } from "react-icons/fa";
import image from "../img/image1.jpg";
import {
  BsArrowUpRightCircleFill,
  BsStars,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { PiArrowCircleUpRight, PiWavesBold } from "react-icons/pi";
import { IoMdCopy } from "react-icons/io";

const Main = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>
          The Future of Manufacturing <br />
          with <span className="highlight">Latest Technology</span>
        </h1>
        <p>
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>
        <div className="header-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Try Demo</button>
        </div>

        {/* Review section  */}
        <div className="reviews">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
            <span className="rating-value">5.0</span>
          </div>
          <p className="reviews-text">
            from 80+{" "}
            <a href="www.google.com" className="revie-text-bold">
              reviews
            </a>
          </p>
        </div>
      </header>
      
      <div className="icon-sections">
        <div className="icon-column">
          <BsStars className="icon-1" />
          <PiArrowCircleUpRight className="icon-2" />
          <IoMdCopy className="icon-3" />
        </div>

        <div className="icon-column icons-right">
          <BiBarChart className="icon-4" />
          <PiWavesBold className="icon-5" />
        </div>
      </div>

      {/* Card Section */}
      <section className="stats">
        <div className="cards image-card">
          <img src={image} alt="Industrial Pipes" className="card-image" />
        </div>
        <div className="card card-green">
          <p>
            <span className="number-highlight">100+</span>
            <br />
            Our Esteemed
            <br /> Clients and <br /> Partners
          </p>
        </div>
        <div className="card card-white">
          <div className="card-header">
            <span className="icon-containers">
              <span className="icon-left">
                <MdOutlineSpaceDashboard className="icon left-icon" />
              </span>
              <BsThreeDotsVertical />
            </span>
            <div className="card-body">
              <p className="aligned-content">
                Total Projects{"  "}
                <span>
                  <BsArrowUpRightCircleFill />
                </span>{" "}
                <span className="percentage">8%</span> <br />
                <span className="highlight-1951">1951+</span> <br />
                <span className="text-label">Increase of</span>{" "}
                <span className="highlight-number">126</span>{" "}
                <span className="text-label">this month </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card card-accent">
          <h1 className="heighlit-six">6+</h1>
          <p>
            Years of
            <br /> Dedicated<br></br> Service
          </p>
        </div>
        <div className="card card-dark">
          <div className="content-container">
            <BsSpeedometer className="icon" />
            <div className="text-content">
              <p>
                Achieve Optimal <br />
                Efficiency and Boost <br />
                Productivity
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
