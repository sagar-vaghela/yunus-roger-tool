import React, { useState } from "react";
import QuestionsList from "../containers/QuestionsList";

function Radio({ question, options, subitems, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  const renderSubitems = () => {
    if (selectedOption && subitems) {
      return subitems[selectedOption]?.map((subitem, index) => {
        return <QuestionsList key={index} data={subitem} />;
      });
    }
  };

  return (
    <div>
      <p>{question}</p>
      <div>
        {options?.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name={question}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          );
        })}
      </div>
      <div>{renderSubitems()}</div>
    </div>
  );
}
export default Radio;
