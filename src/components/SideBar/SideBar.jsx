import React from "react";
import "./SideBar.css";

const SideBar = ({
  openAddLectureHandler,
  lectures,
  onSelectLecture,
  selectedLectureId,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sidebar">
      <form className="sidebar-form" onSubmit={submitHandler}>
        <h2 className="sidebar-form-h2">Lectures</h2>
        <button className="sidebar-form-button" onClick={openAddLectureHandler}>
          + Add Lecture
        </button>
      </form>
      <ul className="sidebar-ul">
        {lectures.map((lecture) => {
          let classes = "sidebar-ul-li";

          if (lecture.id === selectedLectureId) {
            classes = "active";
          } else {
            classes = "sidebar-ul-li";
          }

          return (
            <li
              onClick={() => onSelectLecture(lecture.id)}
              className={classes}
              key={lecture.id}
            >
              {lecture.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
