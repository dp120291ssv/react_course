import React, { Component } from "react";

export default class ContactsForm extends Component {
  state = {
    contact: {
      name: "",
      surname: "",
      phone: "",
    },
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.contact);
    this.setState({ contact: { name: "", surname: "", phone: "" } });
  };

  onInputChange = (e) => {
    this.setState({
      contact: { ...this.state.contact, [e.target.name]: e.target.value},
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>Fill contact information:</h3>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.contact.title}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          placeholder="surname"
          name="surname"
          value={this.state.contact.title}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={this.state.contact.title}
          onChange={this.onInputChange}
        />
        <button className="save-btn">SAVE</button>
      </form>
    );
  }
}
