import React from "react";
import ButtonModal from "./ButtonModal";

const Modal = ({ modal, setModal }) => {
  if (modal) return <div>Este é um modal.</div>;
  return null;
};

export default Modal;
