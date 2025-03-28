import React from "react";

function FishNameInput({
  type = "text",
  value,
  onChange,
  title,
  id,
  disabled,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={title}
        disabled={disabled}
      />
      <label htmlFor={id}>{title}:</label>
    </div>
  );
}
export default FishNameInput;
