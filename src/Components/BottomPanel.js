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
    console.log({ initialPos, item });
    setRecenter({
      longitude: initialPos.longitude,
      latitude: initialPos.latitude,
      zoom: 16,
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
                <div className="item-title">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <h5>{item.title}</h5>
                </div>
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
