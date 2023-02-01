import Form from "./contactsForm";


const ContactsForm = ({sendEmail}) => {
  

  return (
    <div className="background-form d-flex align-items-center">
      <Form sendEmail={sendEmail} />
    </div>
  );
};

export default ContactsForm;