import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "../componentCss/AboutMeCss.css";
import aboutMe from "../img/about-me.jpg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="l-12 m-12 about-me-wrapper grid wide">
        <div className="row">
          <div
            className="about-me-img m-6 l-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img className="l-12 m-12" src={aboutMe} alt="no pic" />
          </div>
          <div className="l-6 m-6 about-me-content">
            <h1 className="about-me-intro">
              {" "}
              <Header title="I am" titleEmph="Tung" />{" "}
            </h1>
            <p className="about-me-describe">
              {" "}
              Lately, I've been studying as a 2nd year student at University of
              Information Technology, National University of Ho Chi Minh city,
              Vietnam. I'm strongly interested in Front-end web developing, and
              have spent 2 years on learning qualified skills.{" "}
            </p>
            <div className="about-me-btn-zone">
              <button className="btn about-me-hire ">
                {" "}
                <a href="#">HIRE ME</a>{" "}
              </button>
              <button className="btn about-me-cv ">
                {" "}
                <a href="#">DOWNLOAD MY CV </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
