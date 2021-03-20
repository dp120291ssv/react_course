import React from "react";

export default function StickerHeader({ onAddClick }) {
  return (
    <div className="navbar">
      <div className="appName">Stickers Desk</div>
      <button className="addBtn" onClick={onAddClick}>
        Add new
      </button>
    </div>
  );
}
