import React, { useEffect, useState } from "react";

const UserListWithLoader = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 🔄 loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API delay with setTimeout (optional)
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch users");
          return res.json();
        })
        .then((data) => setUsers(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading)
    return (
      <div style={styles.loaderContainer}>
        <div className="spinner" style={styles.spinner}></div>
        <p>Loading data...</p>
      </div>
    );

  if (error)
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        ❌ Error: {error}
      </p>
    );

  return (
    <div style={styles.container}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={styles.card}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Inline styles for simplicity
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "sans-serif",
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  },
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    fontFamily: "sans-serif",
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #007bff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    marginBottom: "10px",
  },
};

// ✅ CSS animation for spinner
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);

export default UserListWithLoader;
