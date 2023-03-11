import React, { useState } from "react";
import "./addListModal.css";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsSlice";
import { v4 as uuidv4 } from "uuid";

function AddListModal({ handleIsOpen }) {
  const dispatch = useDispatch();
  const [listInfo, setListInfo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newId = uuidv4();

  const handleInput = (e) => {
    const { value } = e.target;
    setListInfo({ title: value, id: newId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listInfo.title) {
      setErrorMessage("Please enter a list name.");
      return;
    }
    dispatch(addList(listInfo));
    setListInfo("");
    setErrorMessage("");
  };

  return (
    <div className="is-active w-25 my-5">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <button
            onClick={() => handleIsOpen()}
            className="btn btn-primary ms-auto modal-button"
          >
            x
          </button>
          <h4 className="m-0 p-0">Create New List</h4>
          <div className="field">
            <form
              className="pb-3 d-flex flex-column"
              onSubmit={(e) => handleSubmit(e)}
              action=""
            >
              <label className="m-2 form-label">List Name</label>
              <input
                className="form-control "
                type="text"
                onChange={handleInput}
                value={listInfo.title || ""}
                placeholder="List Name..."
              />
              {errorMessage && (
                <p className="text-danger mt-3">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary m-2 text-center w-50 m-auto mt-3"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListModal;
