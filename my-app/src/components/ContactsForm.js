import React, { useState, useEffect } from "react";

export default function ContactsForm({ onSave }) {

  const [contact, setContact] = useState(getEmptyContact());
  
  function getEmptyContact() {
    return {
        name: '',
        surname: '',
        phone: '',
    };
}

  function onFormSubmit(e) {
    e.preventDefault();
    onSave(contact);
    // this.setState({ contact: { name: "", surname: "", phone: "" } });
  }

  function onInputChange(e) {
    setContact({
      contact: { ...contact, [e.target.name]: e.target.value },
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h3>Fill contact information:</h3>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={contact.name}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        value={contact.surname}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={contact.phone}
        onChange={onInputChange}
      />
      <button className="save-btn">SAVE</button>
    </form>
  );
}
