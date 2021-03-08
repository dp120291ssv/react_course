import React, { Component } from "react";

export default class ContactsListItem extends Component {

  onDeleteBtnClick = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.item.id);
};

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>{item.phone}</td>
        <td>
            <button className="delete-btn" onClick={this.onDeleteBtnClick}>DELETE</button>
            <button className="edit-btn" disabled>EDIT</button>
        </td>
      </tr>
    );
  }
}
