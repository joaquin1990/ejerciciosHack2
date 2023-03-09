import React from "react";
import { useState } from "react";
import AddListModal from "../addListModal/AddListModal";
import { FaPlusCircle } from "react-icons/fa";
import ListContainer from "../listContainer/ListContainer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <h2 className="m-5">HackList</h2>
      <ListContainer />
      {/* CODE THE SHOW OR NOT SHOW THE MODAL */}
      {isOpen && (
        <div className="d-flex justify-content-center align-items-center h-50 w-100 ">
          <AddListModal handleIsOpen={handleIsOpen} />
        </div>
      )}
      {/* BUTTON POR ADDING NEW LISTS */}
      <div className="d-flex position-fixed bottom-0 start-0 m-5">
        <button onClick={() => handleIsOpen()} className="fs-1 border-0 bg-transparent ">
          <FaPlusCircle size={100} />
        </button>
      </div>
    </div>
  );
}

export default Home;
