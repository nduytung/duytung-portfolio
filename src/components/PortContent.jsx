import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/PortContentCss.css";
import "../grid.css";

class PortContent extends React.Component {
  render() {
    const { describeHeader, source } = this.props;
    return (
      <div className="l-3 m-4 c-6 wrapper">
        <div
          className="img-container"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <img src={source} alt="not available" />
        </div>
        <h3 className="desHeader">{describeHeader}</h3>
        <p className="describer">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
          obcaecati in et. Quaerat, aperiam illo quae assumenda explicabo
          recusandae cupiditate laboriosam molestias inventore nihil, quis ad
          consectetur sed cumque!
        </p>
      </div>
    );
  }
}

export default PortContent;
