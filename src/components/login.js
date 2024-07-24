import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Box className='bg-primarytext'>
        <Container maxWidth='lg'>
          <Box className='flex h-screen flex-col items-center gap-16 justify-center'>
            <Typography variant='h4' fontWeight='bold' className='text-center'>
              Roger - HCHB - Tool
            </Typography>
            <Box className='flex flex-col gap-6 max-w-[500px]'>
              <Typography
                variant='body1'
                className='capitalize text-xl text-center'>
                Please enter the visit id
              </Typography>
              <Box className='flex items-center justify-center w-[500px]'>
                <TextField
                  id='outlined-basic'
                  label='Enter Visit Id'
                  variant='outlined'
                  fullWidth
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      borderRadius: "30px",
                    },
                    "& .MuiFormLabel-root": {
                      paddingLeft: "8px",
                      paddingTop: "2px",
                    },
                  }}
                />
              </Box>
              <Box className='flex items-center justify-center'>
                <button className='bg-primary text-primarytext rounded-full px-14 py-2 text-center'>
                  Enter
                </button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Login;
