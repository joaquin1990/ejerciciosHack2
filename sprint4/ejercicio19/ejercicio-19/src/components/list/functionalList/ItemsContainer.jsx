import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Container() {
  const lists = useSelector((state) => state.lists);
  const { id } = useParams();

  const actualList = lists.find((list) => list.id === id);

  console.log(id);
  console.log(lists);
  console.log(actualList);

  return (
    <div>
      {actualList.items.map((item) => (
        <Item key={item.itemId} item={item} />
      ))}
    </div>
  );
}

export default Container;
