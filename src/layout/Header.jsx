import React from "react";

const Header = ({ title }) => {
  return (
    <div className="row text-center">
      <div className="col">
        <header>
          <h1>{title}</h1>
        </header>
      </div>
    </div>
  );
};

export default Header;
