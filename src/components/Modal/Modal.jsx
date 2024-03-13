import React, { forwardRef } from "react";
import "./Modal.css";
// import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  return (
    <dialog ref={ref}>
      {children}
      <form method="dialog">
        <button className="dialog-button">{buttonCaption}</button>
      </form>
    </dialog>
  );
});

export default Modal;
