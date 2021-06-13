import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <>
      <h1 className="experience-title">experience</h1>
      <div className="experience-container">
        <h4 className="experience-heading">
          Animaker (Front End Developer) April 2021 - Present
        </h4>
        <div className="experience-items-container">
          <div className="experience-items">
            Involved in requirement gathering and concept design phase of
            project
          </div>
          <div className="experience-items">
            Mostly used React with Immutable Js,GSAP
          </div>
          <div className="experience-items">
            Mostly involved in resolving bugs and implementing new features of
            core application
          </div>
        </div>
      </div>

      <div className="experience-container">
        <h4 className="experience-heading">
          Tata Consultancy Services (Assistant System Enginner) April 2019 -
          March 2021
        </h4>
        <div className="experience-items-container">
          <div className="experience-items">
            Involved in requirement gathering and concept design phase of
            project
          </div>
          <div className="experience-items">
            Mostly used React Hooks ,Redux,React-Router-Dom,Material Ui +
            Material Icons
          </div>
          <div className="experience-items">
            Created Sites using React BootStrap & React Icons
          </div>
          <div className="experience-items">
            Built backend REST API with Node JS, Express.JS
          </div>
          <div className="experience-items">
            Developed Models and Enforced relationships in MongoDB
          </div>
        </div>
      </div>
      <h1 className="experience-title">education</h1>
      <div className="experience-container">
        <h4 className="experience-heading-school">
          B.E(Electrical & Electronics Engineering) | Kumaraguru College of
          Technology | August 2015 - April 2019 | CGPA 7.59
        </h4>
        <h4 className="experience-heading-school">
          HSLC(12th - Biology Maths) | National Model Schools | June 2013 -
          April 2015 | Percentage 89.33
        </h4>
        <h4 className="experience-heading-school">
          SSLC(10th) | Vimal Jyothi Convent Mat.HR.Sec Schools | June 2001 -
          April 2013 | Percentage 93.8
        </h4>
      </div>
    </>
  );
};

export default Experience;
