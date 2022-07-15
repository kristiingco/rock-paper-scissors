import React, { useContext, useEffect } from "react";
import Modal from "./Modal";
import { ModalContext } from "../contexts/ModalContext";

const Rules = () => {
  const { setIsModalOpen } = useContext(ModalContext);

  const handleOnClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-center">
      <button
        className="border-2 font-bold tracking-widest uppercase w-40 py-3 rounded-lg"
        onClick={handleOnClick}
      >
        Rules
      </button>
      <Modal />
    </div>
  );
};

export default Rules;
