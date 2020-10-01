import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/CommentListCss.css";
import ClientComment from "./ClientComment";
import Duc from "../img/Duc.jpg";
import Thao from "../img/Thao.jpg";
import Kel from "../img/Kel.jpg";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [Duc, Thao, Kel, Duc],
      tutorName: [
        "- Tri Duc - Teammate from Vo Truong Toan Hight school - Leader at UEL",
        "- Nguyen Thanh Thao - The Associated Organ of Vietnamese Students’ Association, Faculty of Computer Network & Communication, UIT",
        "- Kel - Personal mentor from 2018 to now",
        "- Tri Duc - Teammate from Vo Truong Toan Hight school - Leader at UEL",
      ],
    };
  }

  render() {
    return (
      <div className="grid wide list-comment-wrapper">
        <div className="row">
          {this.state.source.map((eachSource, i) => {
            return (
              <ClientComment
                source={eachSource}
                tutorName={this.state.tutorName[i]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommentList;
