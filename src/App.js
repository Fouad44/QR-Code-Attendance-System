import React, { useState } from "react";
import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import AddLecture from "./components/AddLecture/AddLecture";
import NoLectureSelected from "./components/NoProjectSelected/NoLectureSelected";
import SelectedLecture from "./components/SelectedLecture/SelectedLecture";

function App() {
  const [lecturesState, setLecturesState] = useState({
    selectedLectureId: undefined,
    lectures: [
      {
        id: 1,
        title: "Lecture 1",
        description: "QR CODE Attendance System",
        dueDate: "Nov 23, 2023",
      },
      {
        id: 2,
        title: "Lecture 2",
        description: "QR CODE Attendance System",
        dueDate: "Nov 22, 2023",
      },
      {
        id: 3,
        title: "Lecture 3",
        description: "QR CODE Attendance System",
        dueDate: "Nov 21, 2023",
      },
      {
        id: 4,
        title: "Lecture 4",
        description: "QR CODE Attendance System",
        dueDate: "Nov 20, 2023",
      },
      {
        id: 5,
        title: "Lecture 5",
        description: "QR CODE Attendance System",
        dueDate: "Nov 25, 2023",
      },
      {
        id: 6,
        title: "Lecture 6",
        description: "QR CODE Attendance System",
        dueDate: "Nov 28, 2023",
      },
    ],
  });

  // const [isLectureAdded, setIsLectureAdded] = useState(false);

  const handleSelectedLecture = (id) => {
    setLecturesState((prevState) => {
      return {
        ...prevState,
        selectedLectureId: id,
      };
    });
  };

  const handleCancelLecture = () => {
    setLecturesState((prevState) => {
      return {
        ...prevState,
        selectedLectureId: undefined,
      };
    });
  };

  const handleStartLecture = () => {
    setLecturesState((prevState) => {
      return {
        ...prevState,
        selectedLectureId: null,
      };
    });
  };

  const handleAddLecture = (lectureData) => {
    setLecturesState((prevState) => {
      const newLecture = {
        ...lectureData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedLectureId: undefined,
        lectures: [...prevState.lectures, newLecture],
      };
    });
  };

  const handleDeleteLecture = () => {
    setLecturesState((prevState) => {
      return {
        ...prevState,
        selectedLectureId: undefined,
        lectures: prevState.lectures.filter(
          (lecture) => lecture.id !== prevState.selectedLectureId
        ),
      };
    });
  };

  // const openAddLectureHandler = () => {
  //   setIsLectureAdded(true);
  // };

  // const closeAddLectureHandler = () => {
  //   setIsLectureAdded(false);
  // };

  const selectedLecture = lecturesState.lectures.find(
    (lecture) => lecture.id === lecturesState.selectedLectureId
  );

  let content = (
    <SelectedLecture lecture={selectedLecture} onDelete={handleDeleteLecture} />
  );

  if (lecturesState.selectedLectureId === null) {
    content = (
      <AddLecture onAdd={handleAddLecture} onCancel={handleCancelLecture} />
    );
  } else if (lecturesState.selectedLectureId === undefined) {
    content = <NoLectureSelected openAddLectureHandler={handleStartLecture} />;
  }
  return (
    <main className="App">
      <SideBar
        openAddLectureHandler={handleStartLecture}
        lectures={lecturesState.lectures}
        onSelectLecture={handleSelectedLecture}
        selectedLectureId={lecturesState.selectedLectureId}
      />

      {content}
      {/* {isLectureAdded ? (
        <AddLecture closeAddLectureHandler={closeAddLectureHandler} />
      ) : (
        <NoLectureSelected openAddLectureHandler={openAddLectureHandler} />
      )} */}
    </main>
  );
}

export default App;
