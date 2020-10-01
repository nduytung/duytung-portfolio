import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/FooterCss.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "September 20, 2020",
    };
  }

  render() {
    const { date } = this.state;
    return (
      <div className="grid wide">
        <div className="row footer">
          <p className="author-contribute">
            {" "}
            Theme designed by ColorLib. Coded by Duy Tung using ReactJs
          </p>
          <p className="release-date">
            {" "}
            This is NOT a commercial product. Final release on {date}
          </p>
          <p className="copyright">No copyrights</p>
        </div>
      </div>
    );
  }
}

export default Footer;
