import React from "react";

export default function Button({ onClick, buttonType, children }) {
  return (
    <div
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </div>
  );
}
