import React, { useRef } from "react";
import Input from "./Input";
import "./AddLecture.css";
import Modal from "../Modal/Modal";

const AddLecture = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.showModal();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="close">
        <h2>Invalid Input</h2>
        <p>Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="add-lecture">
        <menu className="menu-buttons">
          <li>
            <button className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default AddLecture;
