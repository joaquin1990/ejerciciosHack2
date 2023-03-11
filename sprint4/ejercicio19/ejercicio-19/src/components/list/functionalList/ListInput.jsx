import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../../redux/listsSlice";
import { v4 as uuidv4 } from "uuid";

function ListInput() {
  const [itemTitle, setItemTitle] = useState("");
  const { id } = useParams();

  const itemId = uuidv4();
  const listId = id;
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const title = e.target.value;
    setItemTitle(title);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ itemTitle, itemId, listId }));
    setItemTitle("");
  };

  return (
    <div className="mx-2">
      <form action="" onSubmit={handleOnsubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={itemTitle || ""}
          onChange={(e) => handleInput(e)}
        />
      </form>
    </div>
  );
}

export default ListInput;
