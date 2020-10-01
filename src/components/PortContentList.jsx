import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/PortContentListCss.css";
import "../grid.css";
import PortContent from "./PortContent";
import poster1 from "../img/poster1.jpg";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.JPG";

class PortContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [poster1, poster2, poster3, poster1],
      describeHeader: [
        "Landing poster 'Air max day'",
        "Summer music fest poster ",
        "UIT leader 2020",
        "Landing poster 'Air max day'",
      ],
    };
  }

  renderContent = (i) => {
    return (
      <PortContent
        source={this.state.source[i]}
        describeHeader={this.state.describeHeader[i]}
      />
    );
  };

  render() {
    const { source, describeHeader } = this.state;
    return (
      <div className="wide grid row portfolio-content">
        {source.map((singleSource, i) => {
          return (
            <PortContent
              source={singleSource}
              describeHeader={describeHeader[i]}
            />
          );
        })}
      </div>
    );
  }
}

export default PortContentList;
