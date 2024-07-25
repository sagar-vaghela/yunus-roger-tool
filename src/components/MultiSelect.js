import React, { useState } from "react";
import QuestionsList from "../containers/QuestionsList";

function MultiSelect({ question, options, subitems, onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    let updatedOptions = [];

    if (selectedOptions.includes(selectedValue)) {
      updatedOptions = selectedOptions.filter(
        (option) => option !== selectedValue
      );
    } else {
      updatedOptions = [...selectedOptions, selectedValue];
    }

    setSelectedOptions(updatedOptions);

    if (onChange) {
      onChange(updatedOptions);
    }
  };

  const renderSubitems = () => {
    if (selectedOptions && subitems) {
      return selectedOptions.flatMap(
        (selectedOption) =>
          subitems[selectedOption]?.map((subitem, index) => (
            <QuestionsList key={index} data={subitem} />
          )) || []
      );
    }
  };

  return (
    <div>
      <p>{question}</p>
      <div>
        {options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                name={question}
                value={option}
                checked={selectedOptions.includes(option)}
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

export default MultiSelect;
