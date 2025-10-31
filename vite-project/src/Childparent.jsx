import React, { useState } from "react";

// 🧩 Child Component
const ChildComponent = ({ onDataSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    onDataSend(inputValue); // ✅ send data to parent
    setInputValue("");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        placeholder="Type message for parent"
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #aaa",
          borderRadius: "4px",
          width: "70%",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: "8px 12px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
};

// 🏠 Parent Component
const ParentComponent = () => {
  const [message, setMessage] = useState("");

  // ✅ callback to receive data from child
  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Parent Component</h2>

      <ChildComponent onDataSend={handleDataFromChild} />

      <div>
        <strong>Message from Child:</strong>{" "}
        {message ? (
          <span style={{ color: "green" }}>{message}</span>
        ) : (
          <span style={{ color: "gray" }}>No message yet.</span>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
