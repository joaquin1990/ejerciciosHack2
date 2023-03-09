import React, { useState } from "react";
import "./addListModal.css";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listReducer";

function AddListModal({ handleIsOpen }) {
  const dispatch = useDispatch();
  const [listInfo, setListInfo] = useState("");

  const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    const id = generateId();
    setListInfo({ title: value, id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(listInfo));
    setListInfo("");
  };

  return (
    <div className="is-active w-25 my-5">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <button onClick={() => handleIsOpen()} className="btn btn-primary ms-auto modal-button">
            x
          </button>
          <h4 className="m-0 p-0">Create New List</h4>
          <div className="field">
            <form className="pb-3 d-flex flex-column" value={listInfo} onSubmit={(e) => handleSubmit(e)} action="">
              <label className="m-2 form-label">List Name</label>
              <input className="form-control " type="text" onChange={handleInput} value={listInfo.title || ""} placeholder="List Name..." />
              <button type="submit" className="btn btn-primary m-2 text-center w-50 m-auto mt-3">
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
