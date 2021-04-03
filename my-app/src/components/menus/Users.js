import React, { useEffect, useState } from "react";
import api from "../../service/api";

export default function Users() {

  const initialState = {
    list: [],
  };

  const [someData, setSomeData] = useState(initialState);

  useEffect(() => {
    api.get('').then(({ list }) => setSomeData({ ...initialState, list }));
  }, []);

  // const name = list.map((user) => (user.id))
  

  return (
    <div>Users 123</div>,
    <div>{someData.list}</div>
  );
}
