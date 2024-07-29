import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questionJson from "../lib/mock/hchb.json";
import answerJson from "../lib/mock/answers.json";
import QuestionsList from "../containers/QuestionsList";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import CommonModal from "../components/CommonModal";
import HNPSSummary from "../containers/HNPSSummary";

const QuestionPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { queName, queId } = params;

  const findKey = Object.keys(questionJson).find((key) => {
    return key.replace(/[\/\s]+/g, "-").toLowerCase() === queId;
  });

  const questionData = questionJson[findKey] || [];
  const answerData = answerJson[findKey] || [];

  const [formData, setFormData] = useState({});
  const [openHNPS, setOpenHNPS] = useState(false);
  const [answerFillup, setAnswerFillup] = useState({});

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
    setAnswerFillup({
      [queId]: true
    });
  };
 
  const handleHNPSummary = () => {
    setOpenHNPS(true);
  };

  const handleTranscript = () => {
    navigate(`/transcript`);
  };

  const breadcumTitle = queName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^\w/, (c) => c.toUpperCase());

  const breadcumSubTitle = queId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <Box>
      <Box className="pb-10">
        <Box className="flex justify-between items-center">
          <Typography variant="h4" className="capitalize">
            {`${breadcumTitle} > ${breadcumSubTitle}`}
          </Typography>

          <Box className="flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="outlined"
              sx={{
                color: "#7e63ed",
                borderColor: "#7e63ed",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7e63ed",
                  color: "white"
                }
              }}
              onClick={handleHNPSummary}
            >
              HNP Summary
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#7e63ed",
                borderColor: "#7e63ed",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7e63ed",
                  color: "white"
                }
              }}
              onClick={handleTranscript}
            >
              Transcript
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
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
                  answerFillup={answerFillup}
                  queId={queId}
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
                    answerFillup={answerFillup}
                    queId={queId}
                  />
                </div>
              ))}
            </Card>
          </Grid>
        )}
      </Grid>
      <CommonModal
        open={openHNPS}
        handleClose={() => setOpenHNPS(false)}
        modalBody={<HNPSSummary />}
      />
    </Box>
  );
};

export default QuestionPage;
