import React from "react";
import { Link } from "react-router-dom";

function List({ list }) {
  return (
    <Link className="text-decoration-none text-dark" to={`list/${list.id}`}>
      <div className="card shadow m-4 p-3 ">
        <h4>{list.title}</h4>
        <span>{list.createdAt}</span>
      </div>
    </Link>
  );
}

export default List;
