import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form>
      <input type="text"/>
      <input type="email"/>
      <input type="text"/>

    </form>
    //create form
    // name,phone,email on-input{setEmail} per ognuno dei campi
    //button with handlesubmit
    </>
  );
};

