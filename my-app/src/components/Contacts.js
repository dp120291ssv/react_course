import React, { Component } from "react";
import {
  createContact,
  deleteContact,
  getContacts,
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

  deleteItem = (id) => {
    deleteContact(id);
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  createItem = (newItem) => {
    createContact(newItem).then((data) => {
      this.setState({ list: [...this.state.list, data] });
    });
  };

  onAddContactBtn = () => {
    this.setState({
      showContactForm: !this.state.showContactForm,
    });
  };

  render() {
    return (
      <>
        <div className="main-content-wrapper">
          <div className="left-form-wrapper">
            <ContactsList list={this.state.list} onDelete={this.deleteItem} />
            <button className="add-btn" onClick={this.onAddContactBtn}>
              {!this.state.showContactForm ? "Add Contact" : "Hide Form"}
            </button>
          </div>

          <div className="right-form-wrapper">
            {this.state.showContactForm ? (
              <ContactsForm onSave={this.createItem} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
