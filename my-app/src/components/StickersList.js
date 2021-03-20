import React from "react";
import Sticker from "./Sticker";

export default function StickersList({ stickers, onDelete, onChange, onSave }) {
  return (
    <div className="sticker_list">
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          sticker={sticker}
          onDelete={onDelete}
          onChange={onChange}
          onSave={onSave}
        />
      ))}
    </div>
  );
}
