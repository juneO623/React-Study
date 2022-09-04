import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    // console.log(nextId.current);
    // console.log(inputs);
    nextId.current += 1;

    // 값이 바뀌어도 컴포넌트가 리렌더링 되지 않음
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
