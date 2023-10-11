import React, { createContext, useState } from "react";
import { useEffect } from "react";
import data1 from "./data/test1.json";
import data2 from "./data/test2.json";
import data4 from "./data/test4.json";
// Create a context instance
export const Context = createContext();

// Create a context provider component
export function ContextProvider({ children }) {
  const [dataSet, setDataSet] = useState([]);
  const [isAddDataModalOpen, setIsAddDataModalOpen] = useState(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [recenter, setRecenter] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
    zoom: 0,
  });

  const [isSimulationOn, setIsSimulationOn] = useState(false);

  const addDataSet = (data) => {
    let obj = {
      title: data.title,
      color: data.color,
      positions: data.positions,
    };
    setDataSet([...dataSet, obj]);
  };

  useEffect(() => {
    setDataSet([data1]);
  }, []);

  useEffect(() => {
    if (isAddDataModalOpen || isFileUploadModalOpen) {
      setIsSimulationOn(false);
    }
  }, [isAddDataModalOpen, isFileUploadModalOpen]);

  console.log(dataSet);

  return (
    <Context.Provider
      value={{
        dataSet,
        isAddDataModalOpen,
        setIsAddDataModalOpen,
        addDataSet,
        isSimulationOn,
        setIsSimulationOn,
        isFileUploadModalOpen,
        setIsFileUploadModalOpen,
        recenter,
        setRecenter,
      }}
    >
      {children}
    </Context.Provider>
  );
}
