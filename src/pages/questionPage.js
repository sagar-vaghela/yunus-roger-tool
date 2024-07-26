import React from "react";
import { useParams } from "react-router-dom";
import hchbData from "../lib/mock/hchb.json";
import QuestionsList from "../containers/QuestionsList";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

const QuestionPage = () => {
  const params = useParams();
  const { queId } = params;

  const findKey = Object.keys(hchbData).find((key) => {
    return key.replace(/[\/\s]+/g, "-").toLowerCase() === queId;
  });

  const questionData = hchbData[findKey] || [];

  const totalQuestions = questionData.length;

  console.log("TotalQuestions", totalQuestions);

  const splitIndex = Math.ceil(totalQuestions / 2);
  const firstHalf = questionData.slice(0, splitIndex);
  const secondHalf = questionData.slice(splitIndex);

  console.log("splitIndex", splitIndex);
  console.log("firstHalf", firstHalf);
  console.log("secondHalf", secondHalf);

  return (
    <Box>
      <Box className='pb-10'>
        <Box className='flex justify-between items-center'>
          <Typography variant='h4' className='capitalize'>
            {queId}
          </Typography>
          <Button
            variant='contained'
            sx={{
              backgroundColor: "#7e63ed",
              "&:hover": {
                backgroundColor: "#7e63ed",
              },
            }}>
            Save
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={12} lg={6}>
          <Card className='px-8 py-4 !rounded-2xl'>
            {firstHalf.map((data, i) => (
              <div key={i}>
                <QuestionsList data={data} />
              </div>
            ))}
          </Card>
        </Grid>

        {secondHalf.length > 0 && (
          <Grid item md={12} lg={6}>
            <Card className='px-8 py-4 !rounded-2xl'>
              {secondHalf.map((data, i) => (
                <div key={i}>
                  <QuestionsList data={data} />
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
