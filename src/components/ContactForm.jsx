import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ContactFormCss.css";

class ContactForm extends React.Component {
  render() {
    const { placeHolder } = this.props;
    return (
      <div
        className="m-6 l-6 c-12 contact-wrapper"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <p className="contact-message"> Leave a message for me </p>
        {placeHolder.map((holder) => {
          return (
            <input type="text" placeholder={holder} className="form-input" />
          );
        })}

        <div className="form-input special">
          <input
            type="text"
            placeholder="Extended message"
            className="form-input special-form"
          />
        </div>
        <button className="btn">
          {" "}
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            Send this message
          </a>{" "}
        </button>
      </div>
    );
  }
}

export default ContactForm;
