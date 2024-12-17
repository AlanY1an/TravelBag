import React, { useRef, useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!itemText) {
      alert("Item cannot be empty");
      // Auto focus after empty alart
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
        autoFocus={true}
      />
      <button className="btn">Add to List</button>
    </form>
  );
}
