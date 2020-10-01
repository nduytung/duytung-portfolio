import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/HeaderCss.css";

class Header extends React.Component {
  render() {
    const { title, titleEmph } = this.props;
    return (
      <div className="title-wrapper" data-aos="fade-up">
        <h2>
          {" "}
          {title} <b> {titleEmph}</b>{" "}
        </h2>
      </div>
    );
  }
}

export default Header;
