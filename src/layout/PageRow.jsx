import React from "react";

const Row = ({ children }) => {
  return (
    <div className="row">
      <div className="col">{children}</div>
    </div>
  );
};

export default Row;
