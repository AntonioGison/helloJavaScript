import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, newContact}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);



  const checkDuplicate = (data, value)=>{
    // !! convert in bool
   return !!data.find((dupl)=> dupl.name === value )

  }


  useEffect(() => {
   
    if(name !== ''){
      if(checkDuplicate(contacts, name)){
          setDuplicate(true);
      }
      else{
        setDuplicate(false);
      }
    }

  }, [name]);



  const handleSubmit = (e) => {
    e.preventDefault();

    if(duplicate)
      {return}

    newContact(name, phone, email)
    setName('');
    setPhone('');
    setEmail('');

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm {...{name, phone, email, setEmail, setName, setPhone, handleSubmit}}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileData={contacts} />
      </section>
    </div>
  );
};
