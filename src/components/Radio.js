import React, { useState } from "react";
import QuestionsList from "../containers/QuestionsList";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
} from "@mui/material";

function RadioQuestion({ question, options, subitems, onChange }) {
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
      <Box className='flex flex-col gap-2 py-4'>
        <Box>
          <Typography className='text-base capitalize'>{question}</Typography>
        </Box>

        <FormControl component='fieldset'>
          <RadioGroup
            name={question}
            value={selectedOption}
            onChange={handleOptionChange}
            row>
            <Box className='flex flex-wrap gap-3'>
              {options?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#7e63ed",
                        },
                      }}
                    />
                  }
                  label={option}
                />
              ))}
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
      <div>{renderSubitems()}</div>
    </div>
  );
}

export default RadioQuestion;
