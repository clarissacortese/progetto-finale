import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./contacts-form.css";
import {Label, Input, FormGroup} from "reactstrap";

export default function ContactsForm () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'nh5BI2iyT1Q90fW4h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="background-form d-flex align-items-center">
    <form className="col-md-5 mx-auto email-form" ref={form} onSubmit={sendEmail}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            id="name"
            name="user_name"
            placeholder="your name"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            id="email"
            name="user_email"
            placeholder="your email"
            type="email"
            required
          />
        </FormGroup>
        <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              id="message"
              name="message"
              type="textarea"
              required
            />
        </FormGroup>
        <Input type="submit" value="SEND" className="button mx-auto" />
    </form>
    </div>
  );
}