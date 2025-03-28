import React from "react";

function FishSizeRadios({ value, onChange }) {
  const fishSize = [
    { id: "small", title: "malá" },
    { id: "big", title: "velká" },
  ];

  return (
    <div>
      {fishSize.map(({ id, title }) => (
        <div key={id} className="form-check form-check-inline">
          <input
            type="radio"
            name="size"
            id={id}
            value={title}
            checked={title === value}
            onChange={onChange}
            className="form-check-input"
          />
          <label htmlFor={id} className="form-check-label">
            {title}
          </label>
        </div>
      ))}
    </div>
  );
}
export default FishSizeRadios;
