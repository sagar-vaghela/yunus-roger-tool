import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  //   const [subItemOpen, setSubItemOpen] = useState({});
  //   const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};
