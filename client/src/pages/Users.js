import React from "react";
import { useGetUsers } from "../hooks/useGetUsers";

const Users = () => {
  const [users] = useGetUsers();
  console.log("in USERS", users);

  return <div>{users && users.users.map(user => <p>{user.username}</p>)}</div>;
};

export default Users;
