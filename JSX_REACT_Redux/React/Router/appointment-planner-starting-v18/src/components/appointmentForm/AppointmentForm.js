import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({name,contacts,title,setTitle,contact,setContact,date,setName,setDate,time,setTime,handleSubmit}) => {


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={name} placeholder="Name" type="text" onChange={handleName}/>
      <input value={date} placeholder="Date" type="date" onChange={handleDate} min={getTodayString()}/>
      <input value={time} placeholder="Time" type="time" onChange={handleTime}/>
      <button type="submit">Submit</button>
      <ContactPicker contacts = {contacts} onChange={handleContact} />
    </form>
    </>
  );
};
