import React, { useState } from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "iPhone 15", category: "Mobile" },
    { id: 2, name: "MacBook Pro", category: "Laptop" },
    { id: 3, name: "AirPods Pro", category: "Accessories" },
    { id: 4, name: "iPad Air", category: "Tablet" },
    { id: 5, name: "Apple Watch", category: "Wearable" },
    { id: 6, name: "Magic Keyboard", category: "Accessories" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "15px",
        }}
      />

      {filteredProducts.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                border: "1px solid #eee",
                marginBottom: "8px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>{product.name}</strong>
              <p style={{ color: "gray", margin: "5px 0 0" }}>
                Category: {product.category}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
