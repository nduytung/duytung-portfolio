import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/SkillSetCss.css";

class SkillSet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skillName, skillDescription } = this.props;
    return (
      <div
        className="l-6 m-6 skillset-wrapper "
        data-aos="zoom-in-right"
        data-aos-duration="1500"
      >
        >
        <div className="skill-set">
          <h3> {skillName} </h3>
          <p>{skillDescription}</p>
        </div>
      </div>
    );
  }
}

export default SkillSet;
