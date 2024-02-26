import React, { useEffect, useState } from "react";

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
  return (
    <div>
      <h1>UserList</h1>
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
