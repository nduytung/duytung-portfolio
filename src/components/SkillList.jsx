import React from "react";
import ReactDOM from "react-dom";
import SkillSet from "./SkillSet";
import "../componentCss/SkillListCss.css";

class SkillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillName: [
        "OOP - C++ Fundamentals and Advanced Techniques",
        "Data strutures and Algorithms",
        "HTML5, CSS3, ES6 and even more!",
        "ReactJS, Bootstrap 4, Vue 3 and also Angular 8",
      ],
      skillDescription: [
        "Professionally trained in UIT by Nguyen Tan Tran Minh Khang - vice-president of UIT",
        "Like OOP and C++, I have also been trained in UIT for this. Linked list, matrix, sort & search algorithms, hash table and many more things",
        "As a self-training front-end developer, I studied many thing on my own. It took me a year to get used with these tools and techniques",
        "Lately, I have been dealing with ReactJS anf Vue 3 - As you can see, I built this whole page with ONLY ReactJS - with NO additional library or framework",
      ],
    };
  }

  render() {
    const { skillName, skillDescription } = this.state;
    return (
      <div className="grid wide row skill-list-wrapper">
        <div className="row">
          {skillName.map((singleSkillName, i) => {
            return (
              <SkillSet
                skillName={singleSkillName}
                skillDescription={skillDescription[i]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SkillList;
