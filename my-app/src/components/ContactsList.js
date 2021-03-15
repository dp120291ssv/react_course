import React from "react";
import ContactsListItem from "../components/ContactsListItem";

export default function ContactsList ({list, onDelete}) {
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
          {list.map((item) => (
            <ContactsListItem
              key={item.id}
              item={item}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }

