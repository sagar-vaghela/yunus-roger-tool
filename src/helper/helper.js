import hchbData from "../lib/mock/hchb.json";

export const subSidebarData = () => {
  const sidebarData = [];

  Object.keys(hchbData).map((key) => {

    const name = key.replace(/\/+/g, ' ');
    const value = key.replace(/[\/\s]+/g, '-').toLowerCase();

    sidebarData.push({
      subtitle: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      value: value
    });
  });
  return sidebarData;
};
