import React from "react";
import { handleDeleteFish } from "../handlers/fishHandlers";

function List({ list, setList }) {
  return (
    <ul className="list-group mb-3">
      {list.map((fish) => {
        return (
          <li
            className="list-group-item justify-content-between d-flex"
            key={fish.id}
          >
            {fish.name} / {fish.size}
            <button
              onClick={() => handleDeleteFish(fish.id, list, setList)}
              className="btn-close"
            ></button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
