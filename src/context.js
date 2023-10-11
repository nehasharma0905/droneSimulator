import React, { createContext, useState } from "react";

// Create a context instance
export const Context = createContext();

// Create a context provider component
export function ContextProvider({ children }) {
  const [dataSet, setDataSet] = useState([]);
  const [isAddDataModalOpen, setIsAddDataModalOpen] = useState(false);

  const addDataSet = (data) => {
    let obj = {
      title: data.title,
      color: data.color,
      icon: data.icon,
      positions: data.positions,
    };
    setDataSet([...dataSet, obj]);
  };

  return (
    <Context.Provider
      value={{
        dataSet,
        isAddDataModalOpen,
        setIsAddDataModalOpen,
        addDataSet,
      }}
    >
      {children}
    </Context.Provider>
  );
}
