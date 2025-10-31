import React, { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState(""); // state to store input value

  const handleChange = (e) => {
    setName(e.target.value); // updates state as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Controlled Input Example</h2>

      <label htmlFor="name">Enter your name:</label>
      <input
        id="name"
        type="text"
        value={name} // input value controlled by state
        onChange={handleChange} // updates state on typing
        placeholder="Type your name"
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginTop: "5px",
        }}
      />

      <button
        type="submit"
        style={{
          marginTop: "15px",
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      {name && (
        <p style={{ marginTop: "10px", color: "green" }}>
          You typed: <strong>{name}</strong>
        </p>
      )}
    </form>
  );
};

export default ControlledInput;
