import React from "react";

function Button({ id, label, active, handleEvent }) {
  return (
    <button
      type="button"
      id={id}
      onClick={() => handleEvent(id)}
      className={`btn btn-primary ${active ? "active" : ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
