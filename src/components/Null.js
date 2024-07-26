import { Box, Typography } from "@mui/material";
import React from "react";

const Null = ({ question }) => {
  return (
    <>
        <Box>
          <Typography className='text-base capitalize'>{question}</Typography>
        </Box>
    </>
  );
};

export default Null;
