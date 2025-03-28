import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-info-subtle pb-5">
      <div className="container bg-light p-5 rounded-bottom">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
