import React, { useContext } from "react";
import { Context } from "../context";

const BottomPanel = () => {
  const {
    setIsAddDataModalOpen,
    isSimulationOn,
    setIsSimulationOn,
    setIsFileUploadModalOpen,
    dataSet,
    recenter,
    setRecenter,
  } = useContext(Context);

  const toggleCenter = (item) => {
    const initialPos = item.positions.length ? item.positions[0] : recenter;
    setRecenter({
      longitude: initialPos.longitude,
      latitude: initialPos.latitude,
      zoom: 10,
    });
  };

  return (
    <div className="bottom-panel">
      <div className="column1">
        <button className="simulate" onClick={() => setIsSimulationOn(true)}>
          Simulate
        </button>
        <button className="pause" onClick={() => setIsSimulationOn(false)}>
          Pause
        </button>
      </div>
      <div className="column2">
        <button className="dataset" onClick={() => setIsAddDataModalOpen(true)}>
          Add Dataset
        </button>
        <button
          className="fileupload"
          onClick={() => setIsFileUploadModalOpen(true)}
        >
          File Upload
        </button>
      </div>
      <div className="column3">
        <ul>
          {dataSet.map((item, index) => {
            return (
              <li key={index}>
                <span style={{ backgroundColor: item.color }}></span>
                <h5>{item.title}</h5>
                <button onClick={() => toggleCenter(item)}>
                  Click to focus
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BottomPanel;
