import React, { useEffect, useState } from "react";
import QuestionsList from "../containers/QuestionsList";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@mui/material";

function MultiSelect({
  question,
  options,
  subitems,
  onChange,
  answerData,
  setFormData,
  formData,
  answerFillup,
  queId
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (formData[question]) {
      setSelectedOptions(formData[question]);
    }
  }, [formData, question]);

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
      onChange(question, updatedOptions);
    }
  };

  const renderSubitems = () => {
    if (selectedOptions && subitems) {
      return selectedOptions.flatMap(
        (selectedOption) =>
          subitems[selectedOption]?.map((subitem, index) => (
            <QuestionsList
              key={index}
              data={subitem}
              onChange={onChange}
              answerData={answerData}
              formData={formData}
              setFormData={setFormData}
              answerFillup={answerFillup}
              queId={queId}
            />
          )) || []
      );
    }
  };

  return (
    <div>
      <Box className="flex flex-col gap-2 py-4">
        <Box>
          <Typography className="text-base capitalize">{question}</Typography>
        </Box>
        <FormGroup>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedOptions.includes(option)}
                  onChange={handleOptionChange}
                  value={option}
                  sx={{
                    "&.Mui-checked": {
                      color: "#7e63ed"
                    }
                  }}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </Box>
      <div>{renderSubitems()}</div>
    </div>
  );
}

export default MultiSelect;
