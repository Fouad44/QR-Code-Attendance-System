import React, { forwardRef } from "react";
import "./AddLecture.css";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <p className="input-wrapper">
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
