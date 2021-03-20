import React from "react";

export default function Sticker({ sticker, onChange, onDelete, onSave }) {
  function onValueChange(e) {
    onChange(sticker.id, { [e.target.name]: e.target.value });
  }

  function saveSticker() {
    onSave(sticker.id);
  }

  return (
    <div className="sticker">
      <div>
        <button className="deleteBtn" onClick={onDelete.bind(null, sticker)}>DELETE</button>
      </div>
      <div>
        <textarea
          className="text"
          name="description"
          value={sticker.description}
          onChange={onValueChange}
          onBlur={saveSticker}
        />
      </div>
    </div>
  );
}
