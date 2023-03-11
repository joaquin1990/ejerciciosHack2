import React from "react";

function Item({ item }) {
  return (
    <div className="d-flex">
      <input type="checkbox" />
      <p>{item.itemTitle}</p>
    </div>
  );
}

export default Item;
