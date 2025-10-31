import React, { useEffect, useState } from "react";

const UserList = ({data}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}>
            <strong>{user.name}</strong> <br />
            ✉️ {user.email} <br />
            📍 {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
