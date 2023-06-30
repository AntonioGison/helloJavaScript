import React from "react";

export const ContactForm = ({name, phone,email,setName,setPhone,setEmail,handleSubmit,}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="name" onChange={handleNameChange} />
        <input type="email" value={email} placeholder="email" onChange={handleEmailChange} />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
