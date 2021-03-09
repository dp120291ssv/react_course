import React, { Component } from "react";
import {
  createContact,
  deleteContact,
  getContacts,
  updateContact
} from "../services/contactsService";
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";

export default class Contacts extends Component {
  state = {
    list: [],
    showContactForm: false,
  };

  componentDidMount() {
    getContacts().then((list) => this.setState({ list }));
  }

  onAddContactBtn = () => {
    this.setState({
      showContactForm: !this.state.showContactForm,
    });
  };

  createContact = (newItem) => {
    createContact(newItem).then((data) => {
      this.setState({ list: [...this.state.list, data] });
    });
  };

  // updateContact = (newItem) => {
  //   const newItem = this.state.list.find((el) => el.id === id);

  //   updateContact(newItem).then(() => {
  //     this.setState({
  //       list: this.state.list.map((newItem) => (newItem.id !== id ? newItem : newItem)),
  //     });
  //   });
  // };

  deleteItem = (id) => {
    deleteContact(id);
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <>
        <div className="main-content-wrapper">
          <div className="left-form-wrapper">
            <ContactsList
              list={this.state.list}
              onDelete={this.deleteItem}
              onEdit={this.updateContact}
            />
            <button className="add-btn" onClick={this.onAddContactBtn}>
              {!this.state.showContactForm ? "Add Contact" : "Hide Form"}
            </button>
          </div>
          <div className="right-form-wrapper">
            {this.state.showContactForm ? (
              <ContactsForm onSave={this.createContact} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
