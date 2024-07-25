import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import { sidebarData } from "../lib/mock/mockData";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SideBar = ({ openDrawer }) => {
  const [openMenu, setOpenMenu] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = (index) => () => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [index]: !prevOpenMenu[index],
    }));
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        variant='permanent'
        sx={{
          width: "300px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
          },
        }}
        anchor='left'>
        <Box role='presentation' onClick={(e) => e.stopPropagation()}>
          <List>
            {sidebarData.map((service, index) => {
              return (
                <div key={index}>
                  {service.subItems ? (
                    <ListItemButton
                      key={index}
                      onClick={handleClick(index)}
                      sx={{
                        py: 2,
                      }}>
                      <ListItemText primary={service.text} />
                      {openMenu[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      sx={{
                        py: 2,
                      }}>
                      <HomeIcon />
                    </ListItemButton>
                  )}
                  {service.subItems && (
                    <Collapse in={openMenu[index]} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        <Box className='pl-2'>
                          <ChevronLeftIcon onClick={handleClick(index)} />
                        </Box>
                        {service.subItems.map((subItem, subIndex) => {
                          return (
                            <ListItemButton
                              key={subIndex}
                              sx={{
                                pl: 4,
                              }}>
                              <ListItemText primary={subItem.text} />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}
                  <Divider
                    sx={{
                      borderColor: "hsla(0,0%,55%,.2)",
                    }}
                  />
                </div>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
