import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Number = ({ question }) => {
  return (
    <>
      <Box className='flex flex-col gap-4 py-4'>
        <Box>
          <Typography className='text-base capitalize'>{question}</Typography>
        </Box>
        <Box>
          <TextField
            id='outlined-basic'
            label='Enter Your Number'
            variant='outlined'
            fullWidth
            inputProps={{ type: "number" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#7e63ed",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#7e63ed",
                },
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Number;
