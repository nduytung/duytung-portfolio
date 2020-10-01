import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ContactInfoCss.css";

class ContactInfo extends React.Component {
  render() {
    const { infoTitle, infoDetail } = this.props;
    return (
      <div
        className="m-6 l-6 c-12"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <p className="contact-message"> My contact information </p>
        <div className="info-content-wrapper">
          {infoTitle.map((title, i) => {
            return (
              <div className="info-content">
                <h4> {title}</h4>
                <p>{infoDetail[i]}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContactInfo;
