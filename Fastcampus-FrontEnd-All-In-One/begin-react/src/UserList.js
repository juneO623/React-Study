import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;

  //   useEffect(() => {
  //     console.log("user 값이 설정됨");
  //     console.log(user);
  //     return () => {
  //       console.log("user 값이 바뀌기 전");
  //       console.log(user);
  //     };
  //   }, [user]);

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => {
          onToggle(id);
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  //   const users = [
  //     {
  //       id: 1,
  //       username: "jun",
  //       email: "june0623@dgsw.hs.kr",
  //     },
  //     {
  //       id: 2,
  //       username: "velopert",
  //       email: "public.velopert@gmail.com",
  //     },
  //     {
  //       id: 3,
  //       username: "kevin",
  //       email: "kevin1234@gmail.com",
  //     },
  //   ];

  return (
    <>
      {/* <>
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
      </> */}
      {/* {users.map((user, idx) => {
        return (
          <div key={user.id}>
            <b>{user.username}</b>
            <span>{user.email}</span>
          </div>
        );
      })} */}
      {users.map((user, idx) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </>
  );
};

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
