import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/physicalAssessments");
  };

  return (
    <>
      <Box className="bg-primarytext">
        <Container maxWidth="lg">
          <Box className="flex h-screen flex-col items-center gap-16 justify-center">
            <Typography variant="h4" fontWeight="bold" className="text-center">
              Roger - HCHB - Tool
            </Typography>
            <Box className="flex flex-col gap-6 max-w-[500px]">
              <Typography
                variant="body1"
                className="capitalize text-xl text-center"
              >
                Please enter the visit id
              </Typography>
              <Box className="flex items-center justify-center w-[500px]">
                <TextField
                  id="outlined-basic"
                  label="Enter Visit Id"
                  variant="outlined"
                  fullWidth
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      borderRadius: "30px"
                    },
                    "& .MuiFormLabel-root": {
                      paddingLeft: "8px",
                      paddingTop: "2px"
                    }
                  }}
                />
              </Box>
              <Box className="flex items-center justify-center">
                <Button
                  variant="contained"
                  onClick={handleEnter}
                  sx={{
                    backgroundColor: "#7e63ed",
                    "&:hover": { backgroundColor: "#7e63ed" }
                  }}
                >
                  Enter
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default HomePage;
