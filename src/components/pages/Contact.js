import React from "react";
import "../../styles/Contact.scss";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="contact-main">
      <h1 className="title">Get in Touch.</h1>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;
