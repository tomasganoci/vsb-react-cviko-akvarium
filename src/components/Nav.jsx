import React from "react";
import Button from "./Button";
import { createUiHandlers } from "../handlers/uiHandlers";

function Nav({ activePage, setActivePage }) {
  const uiHandlers = createUiHandlers(setActivePage);

  // handleEvent
  const handleEvent = (id) => {
    if (uiHandlers[id]) {
      uiHandlers[id]();
    }
  };
  // /handleEvent
  const navButtons = [
    { id: "btn-rybicky", label: "Rybičky", page: 1 },
    { id: "btn-akvarium", label: "Akvárium", page: 2 },
  ];

  return (
    <nav className="d-flex gap-5 justify-content-center py-3">
      {navButtons.map(({ id, label, page }) => (
        <Button
          key={id}
          id={id}
          label={label}
          handleEvent={handleEvent}
          active={activePage === page}
        />
      ))}
    </nav>
  );
}

export default Nav;
