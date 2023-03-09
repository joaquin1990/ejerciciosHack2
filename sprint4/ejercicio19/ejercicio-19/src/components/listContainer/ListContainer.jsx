import React from "react";
import List from "../list/List";
import { useSelector } from "react-redux";

function ListContainer() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="ms-5">
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default ListContainer;
