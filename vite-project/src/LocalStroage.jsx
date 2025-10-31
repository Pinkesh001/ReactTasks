import React, { useState, useEffect } from "react";

const LocalStorageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // ✅ Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("userForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("userForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form submitted successfully!");
    console.log("Submitted Data:", formData);
  };

  const handleClear = () => {
    localStorage.removeItem("userForm");
    setFormData({ name: "", email: "" });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Form with Local Storage</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
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

        <button
          type="button"
          onClick={handleClear}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Clear Data
        </button>
      </form>
    </div>
  );
};

export default LocalStorageForm;
