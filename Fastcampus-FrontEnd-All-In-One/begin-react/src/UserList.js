import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "jun",
      email: "june0623@dgsw.hs.kr",
    },
    {
      id: 2,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 3,
      username: "kevin",
      email: "kevin1234@gmail.com",
    },
  ];

  return (
    <>
      <>
        <div>
          <b>{users[0].username}</b>
          <span>({users[0].email})</span>
        </div>
        <div>
          <b>{users[1].username}</b>
          <span>({users[1].email})</span>
        </div>
        <div>
          <b>{users[2].username}</b>
          <span>({users[2].email})</span>
        </div>
      </>
      {users.map((user, idx) => {
        return (
          <div key={user.id}>
            {idx}.<b>{user.username}</b>
            <span>{user.email}</span>
          </div>
        );
      })}
      {/* {users.map(user => <User user={user}/>)} */}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </>
  );
};

export default UserList;
