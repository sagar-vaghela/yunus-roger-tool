import React from "react";

const Input = ({ question }) => {
  return (
    <div>
      <p className="normal-case">{question}</p>
      <input type="text" />
    </div>
  );
};

export default Input;
