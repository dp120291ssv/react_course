import React, { useEffect, useState } from "react";
import {
  createContact,
  deleteContact,
  getContacts,
} from "../services/contactsService";
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";

const initialState = {
  list: [],
  showContactForm: false,
};

export default function Contacts() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getContacts().then((list) => setState({ ...initialState, list }));
  }, []);

  function onAddContactBtn () {
    setState((prevState) => {
      return { ...prevState, showContactForm: true };
    });
  };

  function onCreate(newItem) {
    createContact(newItem).then((data) => {
      setState({ ...state, list: [...state.list, data] });
    });
  };

  function deleteItem (id) {
    deleteContact(id);
    setState({ ...state, list: state.list.filter((item) => item.id !== id) });
  };

  return (
    <>
      <div className="main-content-wrapper">
        <div className="left-form-wrapper">
          <ContactsList
            list={state.list}
            onDelete={deleteItem}
            // onEdit={updateContact}
          />
          <button className="add-btn" onClick={onAddContactBtn}>
            {!state.showContactForm ? "Add Contact" : "Hide Form"}
          </button>
        </div>
        <div className="right-form-wrapper">
          {state.showContactForm ? (
            <ContactsForm onSave={onCreate} />
          ) : null}
        </div>
      </div>
    </>
  );
}
