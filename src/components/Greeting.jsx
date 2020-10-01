import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/GreetingCss.css";
import "../App.css";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cheerQuotes: "Hello, my name is",
      cheerName: "Nguyen Duy Tung",
      cheerBtn: "See more about me",
    };
  }
  render() {
    const { cheerQuotes, cheerName, cheerBtn } = this.state;
    return (
      <div className="greetings">
        <h1 className="cheer" data-aos="fade-down" data-aos-duration="1000">
          {cheerQuotes}
        </h1>
        <p className="name" data-aos="fade-up" data-aos-duration="1000">
          {cheerName}
        </p>

        <button className="btn">
          <a href="#">{cheerBtn}</a>
        </button>
      </div>
    );
  }
}

export default Greeting;
