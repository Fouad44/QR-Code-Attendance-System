import React, { useRef } from "react";
import "./SelectedLecture.css";
import Modal from "../Modal/Modal";
import {  Routes, Route, Link } from "react-router-dom";

const SelectedLecture = ({ lecture, onDelete }) => {
  const modal = useRef();

  const handleDeleteFromModal = () => {
    modal.current.showModal();
  };

  const formattedDate = new Date(lecture.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <Modal ref={modal} buttonCaption="Cancel">
        <h1 className="modal-warning">Warning</h1>
        <p>
          Becarfull: If you delete this you will no longer have access to
          students attendance for this lecture
        </p>
        <button
          onClick={onDelete}
          className="selectedlecture-button modal-button-delete"
        >
          Delete
        </button>
      </Modal>
      <div className="selectedlecture">
        <header>
          <div className="selectedlecture-firstwrapper">
            <h2>{lecture.title}</h2>
            <button
              onClick={handleDeleteFromModal}
              className="selectedlecture-button"
            >
              Delete
            </button>
          </div>
          <p className="selectedlecture-date">{formattedDate}</p>
          <p>{lecture.description}</p>
        </header>
        <hr />
        <div className="qrcode">Qr Code</div>

      </div>
    </>
  );
};

export default SelectedLecture;
