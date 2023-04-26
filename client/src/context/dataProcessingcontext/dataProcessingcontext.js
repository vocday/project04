import { useState, createContext, useEffect } from "react";
const DataProcessing = createContext();
function DataProvider({ children }) {
  const [dataProcessing, setDataProcessing] = useState([]);
  useEffect(() => {
    setDataProcessing([
      {
        key: "1",
        name: "Làm web quản lý dự án",
        startday: "20/3/2021",
        endday: "20/4/2022",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Làm tiktok",
        startday: "20/4/2023",
        endday: "20/5/2023",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Làm shopee",
        startday: "1/1/2011",
        endday: "1/2/2022",
        tags: ["cool", "teacher"],
      },
      {
        key: "4",
        name: "Làm web quản lý dự án",
        startday: "2/3/2023",
        endday: "3/9/2021",
        tags: ["nice", "developer"],
      },
    ]);
  }, []);
  const value = {
    dataProcessing,
    setDataProcessing,
  };
  return (
    <DataProcessing.Provider value={value}>{children}</DataProcessing.Provider>
  );
}
export { DataProvider, DataProcessing };
