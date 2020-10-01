import React from "react";
import ReactDOM from "react-dom";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "../componentCss/ContactCss.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: ["Your name", "Your email address", "Your phone number"],
      infoTitle: ["EMAIL", "PHONE", "HOME ADDRESS"],
      infoDetail: [
        "nduytung.1611@gmail.com",
        "+84 919 516 377",
        "Block B, Khang Gia Apartment, Dist 12, TP.HCM",
      ],
    };
  }

  render() {
    const { placeHolder, infoTitle, infoDetail } = this.state;
    return (
      <div className="grid wide row contact-total-wrapper">
        <ContactForm placeHolder={placeHolder} />
        <ContactInfo infoTitle={infoTitle} infoDetail={infoDetail} />
      </div>
    );
  }
}

export default Contact;
