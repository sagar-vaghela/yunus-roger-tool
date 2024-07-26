import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <Box component='main' sx={{ flexGrow: 1, px: 6, py: 4 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
