import React from "react";

function Form({ legend, children, onSubmit }) {
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
}
export default Form;
