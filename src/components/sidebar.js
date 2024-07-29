import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import { sidebarData } from "../lib/mock/mockData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { subSidebarData } from "../helper/helper";
import { ExpandLess } from "@mui/icons-material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [subItemOpen, setSubItemOpen] = useState({});
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  useEffect(() => {
    if (params.queId) {
      setSelectedSubMenu(params.queId);
      setSubItemOpen({
        [params.queName]: true
      });
    }
    if (params.queName) {
      setSelectedMenu(params.queName);
    }
    if (!params.queName && !params.queId) {
      setSelectedMenu(location.pathname.split("/")[1]);
    }
  }, []);

  const handleSideItem = (item) => {
    setSelectedMenu(item.value);
    setSubItemOpen({
      [item.value]: !subItemOpen[item.value]
    });

    if (item.subItems) {
      setSubItemOpen({
        [item.value]: !subItemOpen[item.value]
      });

      const subItem = item.subItems.find((subItem) => {
        return subItem.value === selectedSubMenu;
      });

      setSelectedSubMenu(subItem ? subItem.value : item.subItems[0].value);
      navigate(
        `/${item.value}/${subItem ? subItem.value : item.subItems[0].value}`
      );
    } else {
      navigate(`/${item.value}`);
    }
  };

  const handleSideSubItem = (item, subItem) => {
    setSelectedSubMenu(subItem.value);
    navigate(`/${item.value}/${subItem.value}`);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpenSidebar(newOpen);
  };

  const updatedSidebar = sidebarData.map((item) => {
    if (item.value === "physicalAssessments") {
      return {
        ...item,
        subItems: subSidebarData(item.value)
      };
    } else {
      return {
        ...item
      };
    }
  });

  const handelBack = () => {
    navigate("/mileage");
    setSelectedMenu("mileage");
    setOpenSidebar(false);
    setSelectedSubMenu("");
    setSubItemOpen({});
  };

  return (
    <>
      <Drawer
        open={openSidebar}
        onClose={toggleDrawer(false)}
        variant="permanent"
        sx={{
          width: "300px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box"
          }
        }}
        anchor="left"
      >
        <Box role="presentation" onClick={(e) => e.stopPropagation()}>
          <List>
            <ListItemButton
              onClick={() => navigate("/")}
              sx={{
                py: 2
              }}
            >
              <HomeIcon />
            </ListItemButton>

            <ListItemButton
              onClick={handelBack}
              sx={{
                py: 2
              }}
            >
              <KeyboardBackspaceIcon />
            </ListItemButton>

            {updatedSidebar.map((item, index) => {
              return (
                <div key={index}>
                  <ListItemButton
                    key={index}
                    sx={{
                      py: 2
                    }}
                    onClick={() => handleSideItem(item)}
                  >
                    <ListItemText
                      className={
                        selectedMenu === item.value ? "text-primary" : ""
                      }
                      primary={item.title}
                      onClick={() => handleSideItem(item)}
                    />
                    {item.subItems &&
                      (subItemOpen[item.value] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </ListItemButton>

                  {item.subItems && (
                    <Collapse
                      in={subItemOpen[item.value]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => {
                          return (
                            <ListItemButton
                              key={subIndex}
                              sx={{
                                pl: 4
                              }}
                              onClick={() => handleSideSubItem(item, subItem)}
                            >
                              <ListItemText
                                className={
                                  selectedSubMenu === subItem.value
                                    ? "text-primary"
                                    : ""
                                }
                                primary={subItem.subtitle}
                              />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}

                  <Divider
                    sx={{
                      borderColor: "hsla(0,0%,55%,.2)"
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
