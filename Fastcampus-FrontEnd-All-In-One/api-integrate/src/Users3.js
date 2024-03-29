// with useReducer
import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return response.data;
}

const Users3 = () => {
  //   const [state, refetch] = useAsync(getUsers);
  //   const [state, refetch] = useAsync(getUsers, []);
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);
  const { loading, data: users, error } = state;

  console.log(users);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name}) {user.id}
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users3;
