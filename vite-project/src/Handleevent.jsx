import React, { useState } from "react";

const EventHandlingExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🔹 Click event
  const handleClick = () => {
    setCount(count + 1);
  };

  // 🔹 Input change event
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 🔹 Form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted! Text: ${text}`);
    setText("");
  };

  // 🔹 Mouse over event
  const handleMouseOver = () => {
    console.log("Mouse over detected!");
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
      <h2>React Event Handling Example</h2>

      {/* Click Event */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>
        <p>Button clicked {count} times</p>
      </div>

      {/* Input Change Event */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something"
          style={{
            padding: "8px",
            width: "70%",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Mouse Over Event */}
      <div
        onMouseOver={handleMouseOver}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        Hover over me!
      </div>
    </div>
  );
};

export default EventHandlingExample;
