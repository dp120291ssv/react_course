import React, { useEffect, useState } from "react";
import api from "../../service/api";

export default function Albums() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    api.get("albums").then(({ data }) => setstate(data));
  }, []);

  return (
    <div>
      <div className="albums_header">Albums:</div>
      <div>
        {state.map((albums) => (
          <div key={albums.id} className="album">
            <div className="album_id">{albums.userId}</div>
            <div className="album_title">{albums.title}</div>
            </div>
        ))}
      </div>
    </div>
  );
}
