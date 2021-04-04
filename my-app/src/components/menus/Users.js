import React, { useEffect, useState } from "react";
import api from "../../service/api";

export default function Users() {
  const [state, setState] = useState([]);

  useEffect(() => {
    api.get('users').then(({ data }) => setState(data));
  }, []);

  return (
    <>
      <div className="users_header">Users:</div>
      <div className="users_list">
        {state.map((item) => (
          <div className="user" key={item.id}>
          <div className="user_id">{item.id}</div>
          <div className="user_name">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
