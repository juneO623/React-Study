import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const countActiveUsers = (users) => {
  console.log("활성화 된 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
};

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jun",
      email: "june0623@dgsw.hs.kr",
      active: true,
    },
    {
      id: 2,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "kevin",
      email: "kevin1234@gmail.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  // const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
