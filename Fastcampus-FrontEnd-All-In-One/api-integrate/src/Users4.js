// with useReducer
import React, { useState } from "react";
import User from "./User";
import { getUsers, useUsersDispatch, useUsersState } from "./UsersContext";

const Users4 = () => {
  const [userId, setUserId] = useState(null);

  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  console.log(users);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name}) {user.id}
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users4;
