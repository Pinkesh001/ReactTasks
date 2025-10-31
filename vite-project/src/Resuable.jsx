import React, { useState } from "react";

// ✅ Reusable Form Component
const ReusableForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      const value = formData[field.name].trim();

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field.name] = "Invalid email format";
      }

      if (field.minLength && value.length < field.minLength) {
        newErrors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
      }
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Reusable Form</h2>

      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "15px" }}>
          <label>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            placeholder={field.placeholder || field.label}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
          {errors[field.name] && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

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
    </form>
  );
};

// ✅ Example usage of ReusableForm
const App = () => {
  const formFields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true, minLength: 6 },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("✅ Form submitted successfully!");
  };

  return <ReusableForm fields={formFields} onSubmit={handleFormSubmit} />;
};

export default App;
