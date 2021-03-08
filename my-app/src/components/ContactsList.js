import React, { Component } from "react";
import ContactsListItem from "../components/ContactsListItem";

export default class ContactsList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((item) => (
            <ContactsListItem
              key={item.id}
              item={item}
              onDelete={this.props.onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
