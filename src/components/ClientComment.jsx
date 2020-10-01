import React from "react";
import reactDOM from "react-dom";
import "../componentCss/ClientCommentCss.css";
import "../FA Icons/css/all.css";

class ClientComment extends React.Component {
  render() {
    const { source, tutorName } = this.props;
    return (
      <div className="l-6 c-12 m-12">
        <div
          className=" client-wrapper"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="client-avt">
            <img src={source} alt="" />
          </div>
          <div className="m-10 cmt">
            <i class="fas fa-caret-down"></i>
            <div className="client-describe">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              temporibus quasi nulla repudiandae, dolore error illum. Ad quam
              assumenda nemo tenetur eum provident. Aspernatur minima magni,
              accusantium reiciendis hic aperiam!
              <i className="client-credit"> {tutorName} </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientComment;
