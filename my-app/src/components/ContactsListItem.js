import React from "react";

export default function ContactsListItem(props) {
  function onDeleteBtnClick (e) {
    e.stopPropagation();
    props.onDelete(props.item.id);
  };

  const { item } = props;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.phone}</td>
      <td>
        <button className="delete-btn" onClick={onDeleteBtnClick}>
          DELETE
        </button>
        <button className="edit-btn" disabled>
          EDIT
        </button>
      </td>
    </tr>
  );
}
