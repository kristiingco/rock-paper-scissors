import React, { useContext, useEffect } from "react";
import { ModalContext } from "../contexts/ModalContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleOnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`absolute w-screen h-screen top-0 z-50 ${
        isModalOpen ? "visible" : "hidden"
      }`}
    >
      <div className="flex flex-col bg-white items-center justify-center text-black h-screen gap-20">
        <h1 className="uppercase text-3xl font-bold">Rules</h1>
        <img src="/static/image-rules.svg" alt="rules" />
        <img
          src="/static/icon-close.svg"
          alt="close modal"
          className="relative top-12"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Modal;
