import React, { useState, useEffect } from "react";

export default function ContactsForm({ onSave }) {

  const [contactState, setContactState] = useState(getEmptyContact());

  function getEmptyContact() {
    return {
        name: '',
        surname: '',
        phone: '',
    };
}

  function onFormSubmit(e) {
    e.preventDefault();
    onSave(contactState);
    setContactState({ ...contactState, contact: { name: "", surname: "", phone: "" } });
  }

  function onInputChange(e) {
    setContactState({
      ...contactState, contact: { ...contactState, [e.target.name]: e.target.value },
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h3>Fill contact information:</h3>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={contactState.name}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        value={contactState.surname}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={contactState.phone}
        onChange={onInputChange}
      />
      <button className="save-btn">SAVE</button>
    </form>
  );
}
