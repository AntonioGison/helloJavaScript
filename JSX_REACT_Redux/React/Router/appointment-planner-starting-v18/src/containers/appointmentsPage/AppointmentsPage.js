import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments,contacts, newAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    newAppointment(name, contact, date, time);
    
   setName('');
   setContact('');
   setDate('');
   setTime('');
   //should call the callback function for adding a new appointment with the data from the form.
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...{name, contact, date, time, setContact,setDate,setTime,setName, handleSubmit}} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileData={appointments} />
      </section>
    </div>
  );
};