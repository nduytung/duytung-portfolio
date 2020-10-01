import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/NavBarCss.css";
import "../App.css";

class NavBar extends React.Component {
  render() {
    let { content, linkId } = this.props;
    return (
      <div className="nav-bar-wrapper ">
        <div className="nav-bar-container grid wide">
          <div
            className="nav-bar "
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#section1"> {content[0]}</a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#section2"> {content[1]}</a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#section3"> {content[2]}</a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#section4"> {content[3]}</a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#section5"> {content[4]}</a>
              </li>
            </ul>
          </div>
          <div className="nav-bar-mobile ">
            <i class="fas fa-bars "></i>
          </div>
        </div>
        <div className="nav-bar-mobile-menu">
          <div className="nav-bar-mobile-menu-wrapper grid wide">
            <ul className="nav-mobile-list">
              <li className="nav-mobile-item"> {content[0]} </li>
              <li className="nav-mobile-item"> {content[1]} </li>
              <li className="nav-mobile-item"> {content[2]} </li>
              <li className="nav-mobile-item"> {content[3]} </li>
              <li className="nav-mobile-item"> {content[4]} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
