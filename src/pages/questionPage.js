import React, { useState } from "react";
import { useParams } from "react-router-dom";
import questionJson from "../lib/mock/hchb.json";
import answerJson from "../lib/mock/answers.json";
import QuestionsList from "../containers/QuestionsList";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

const QuestionPage = () => {
  const params = useParams();
  const { queId } = params;

  const findKey = Object.keys(questionJson).find((key) => {
    return key.replace(/[\/\s]+/g, "-").toLowerCase() === queId;
  });

  const questionData = questionJson[findKey] || [];
  const answerData = answerJson[findKey] || [];

  const [formData, setFormData] = useState({});

  const handleChange = (question, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [question]: value
    }));
  };

  const totalQuestions = questionData.length;
  const splitIndex = Math.ceil(totalQuestions / 2);
  const firstHalf = questionData.slice(0, splitIndex);
  const secondHalf = questionData.slice(splitIndex);

  const handleSave = () => {
    console.log("Saved Data=-=-=-=-", formData);
  };

  return (
    <Box>
      <Box className="pb-10">
        <Box className="flex justify-between items-center">
          <Typography variant="h4" className="capitalize">
            {queId}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7e63ed",
              "&:hover": {
                backgroundColor: "#7e63ed"
              }
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={12} lg={6}>
          <Card className="px-8 py-4 !rounded-2xl">
            {firstHalf.map((data, i) => (
              <div key={i}>
                <QuestionsList
                  data={data}
                  answerData={answerData}
                  onChange={handleChange}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
          </Card>
        </Grid>

        {secondHalf.length > 0 && (
          <Grid item md={12} lg={6}>
            <Card className="px-8 py-4 !rounded-2xl">
              {secondHalf.map((data, i) => (
                <div key={i}>
                  <QuestionsList
                    data={data}
                    answerData={answerData}
                    onChange={handleChange}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              ))}
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default QuestionPage;
