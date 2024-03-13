import React from "react";
import empty from "./empty.png";
import "./NoLectureSelected.css";

const NoLectureSelected = ({ openAddLectureHandler }) => {
  return (
    <div className="noLectureSelected-wrapper">
      <img src={empty} alt="An empty task list" />
      <h2>No Lecture Selected</h2>
      <p>Select an existing Lecture or create a new one.</p>
      <button onClick={openAddLectureHandler} className="sidebar-form-button">
        Create new lecture
      </button>
    </div>
  );
};

export default NoLectureSelected;
