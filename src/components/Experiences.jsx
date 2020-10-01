import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ExperiencesCss.css";
import "../grid.css";

class Experiences extends React.Component {
  render() {
    const { time, name, describe, place } = this.props;
    return (
      <div className="l-6">
        <p className="time"> {time} </p>
        <h1> {name} </h1>
        <p className="description"> {describe}</p>
        <footer> {place}</footer>
      </div>
    );
  }
}

export default Experiences;
