import React from "react";

export default function ContactPicker({ contacts, onChange }) {
  return (
    <select onChange={onChange}>
      <option value="">Please Select</option>
      {contacts.map((element, index) => {
        return (
          <option value={element.name} key={index}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
}
