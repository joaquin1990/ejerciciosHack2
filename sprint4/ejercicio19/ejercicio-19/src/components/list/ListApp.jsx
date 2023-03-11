import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ListInput from "./functionalList/ListInput";
import Container from "./functionalList/ItemsContainer";
import { BsArrowLeft } from "react-icons/bs";

function ListContent() {
  const { id } = useParams();
  const lists = useSelector((state) => state.lists);
  const list = lists.find((list) => list.id === id);

  return (
    <div>
      <h1 className="m-5">Hack List</h1>
      <div className="card mx-5 mb-5">
        <span className="m-2">Shopping List </span>
        <h2 className="mx-2">{list.title}</h2>
        <ListInput />
        <Container />
      </div>
      <Link className="ms-5 " to="/">
        <BsArrowLeft /> Go Home
      </Link>
    </div>
  );
}

export default ListContent;
