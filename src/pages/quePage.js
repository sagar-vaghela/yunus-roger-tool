import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { questionData } from "../lib/mock/mockData";

const QuePage = () => {
  const [value, setValue] = useState("female");
  const [multiselect, setMultiselect] = useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMultiselectChange = (event) => {
    setMultiselect({
      ...multiselect,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Box>
      <Box className="pb-3 flex flex-wrap items-center justify-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          className="text-primary uppercase"
        >
          Physical assessment
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7e63ed",
            "&:hover": {
              backgroundColor: "#7e63ed"
            }
          }}
        >
          Answers
        </Button>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card className="px-6 py-4 !rounded-2xl">
            {questionData.map((question, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12}>
                  <Typography variant="body1" className="capitalize pt-4">
                    {question.question}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {question.type === "text" ? (
                    <TextField
                      id="outlined-basic"
                      label="Enter a text"
                      variant="outlined"
                      fullWidth
                    />
                  ) : question.type === "radio" ? (
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        sx={{
                          display: "inline-block"
                        }}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  ) : question.type === "multiselect" ? (
                    <FormGroup>
                      {question.values.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              checked={multiselect[option]}
                              onChange={handleMultiselectChange}
                              name={option}
                              className="capitalize"
                            />
                          }
                          label={option}
                        />
                      ))}
                    </FormGroup>
                  ) : null}
                </Grid>
              </Grid>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuePage;
