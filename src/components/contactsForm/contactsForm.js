import { useRef } from "react";
import "./contactsForm.css";
import MyButton from "../atoms/button/button";
import FormInput from "../atoms/formInput";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailKey = process.env.REACT_APP_EMAIL_KEY;

    emailjs
      .sendForm("contact_service", "contact_form", form.current, emailKey)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="background-form">
      <form
        className="col-md-5 mx-auto email-form"
        ref={form}
        onSubmit={sendEmail}>
        <FormInput
          label="Name"
          id="name"
          placeholder="your name"
          name="user_name"
        />
        <FormInput
          label="Email"
          id="email"
          placeholder="your email"
          name="user_email"
          type="email"
        />
        <FormInput
          label="Message"
          id="message"
          name="message"
          type="textarea"
        />
        <MyButton text="SEND" style={{ width: "100%" }} />
      </form>
    </div>
  );
}
