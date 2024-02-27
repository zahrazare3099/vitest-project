import React, { useEffect, useState } from "react";
import style from "./userList.module.css";
// className={styled.userItem}
import styled from "styled-components";
import Test from "./Test";
import HeadingTest from "./HeadingTest";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const FetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          const users = data.map((user) => ({ name: user.name, id: user.id }));
          setUsers(users);
        })
        .catch(() => setError("Error Fetching Users"));
    };
    FetchUsers();
  }, []);
  // using styled component
  const Heading = styled.h1`
    font-size: 2rem;
    color: red;
  `;
  return (
    <div className={style.parent}>
      <Heading>UserList</Heading>
      <HeadingTest as="h1">Goood morning</HeadingTest>
      <HeadingTest as="h2">Goood Evening</HeadingTest>
      <HeadingTest as="h3">Goood night</HeadingTest>
      <Test />
      <ul>
        {error && <span>{error}</span>}
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            &emsp;
          </li>
        ))}
      </ul>
    </div>
  );
}
