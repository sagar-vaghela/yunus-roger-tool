import { Box, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Date = ({ question }) => {
  return (
    <Box className="flex flex-col gap-4 py-4">
      <Typography className="text-base capitalize">{question}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Enter Your Date"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#7e63ed"
              }
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#7e63ed"
              }
            },
            "& .Mui-selected": {
              backgroundColor: "#7e63ed"
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Date;
