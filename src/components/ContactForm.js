import React from "react";
import "../styles/ContactForm.scss";

function ContactForm(props) {
  return (
    <form action="/send" method="post">
        <p>Name:</p>
        <input type="text" name="name" id=""/>
        <p>Email:</p>
        <input type="email" name="from" id=""/>
        <p>Message:</p>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
        </form>
  );
}

export default ContactForm;