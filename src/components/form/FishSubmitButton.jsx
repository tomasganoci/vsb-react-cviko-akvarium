import React from "react";

function FishSubmitButton({ isValid, color, children }) {
  return (
    <div className="my-2">
      <button disabled={!isValid} type="submit" className={`btn btn-${color}`}>
        {children}
      </button>
    </div>
  );
}
export default FishSubmitButton;
