import React, { useState, useContext } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Context } from "../context";

const AddNewDataSetModal = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const { isAddDataModalOpen, setIsAddDataModalOpen, addDataSet } =
    useContext(Context);

  const [positions, setPositions] = useState([]);

  const [newPosition, setNewPosition] = useState({
    timestamp: 0,
    longitude: 0,
    latitude: 0,
  });

  const handleAddDataSet = () => {
    addDataSet({
      title,
      color,
      positions,
    });
    setIsAddDataModalOpen(false);
  };

  const resetNewPosition = () => {
    setNewPosition({
      timestamp: 0,
      longitude: 1,
      latitude: 1,
    });
  };

  const addPosition = () => {
    setPositions([...positions, newPosition]);
    resetNewPosition();
  };

  const updatePositionByIndex = (index, key, value) => {
    const temp = [...positions];
    temp[index][key] = value;
    setPositions([...temp]);
  };

  const updateNewPosition = (key, value) => {
    console.log({ key, value });
    const temp = { ...newPosition };
    temp[key] = value;
    setNewPosition({ ...temp });
  };

  console.log({ positions });

  return (
    <div className="add-new-data-set">
      <div className="field">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="field">
        <label>Color</label>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
      </div>

      <div className="positions-data">
        <h4>Positions</h4>
        {positions.map((el, index) => {
          return (
            <div className="positions-fields" key={index}>
              <h5>Stamp {index + 1}</h5>
              <div className="field">
                <label>timestamp</label>
                <input
                  value={el.timestamp}
                  onChange={(e) =>
                    updatePositionByIndex(index, "timestamp", e.target.value)
                  }
                />
              </div>

              <div className="field">
                <label>longitudeitute</label>
                <input
                  value={el.longitude}
                  onChange={(e) =>
                    updatePositionByIndex(index, "longitude", e.target.value)
                  }
                />
              </div>

              <div className="field">
                <label>latitudeitute</label>
                <input
                  value={el.latitude}
                  onChange={(e) =>
                    updatePositionByIndex(index, "latitude", e.target.value)
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="positions-fields">
          <button className="add-position" onClick={addPosition}>
            Add New Position{" "}
          </button>
          <div className="field">
            <label>timestamp</label>
            <input
              value={newPosition.timestamp}
              type="number"
              onChange={(e) => updateNewPosition("timestamp", e.target.value)}
            />
          </div>

          <div className="field">
            <label>longitudeitute</label>
            <input
              value={newPosition.longitude}
              onChange={(e) => updateNewPosition("longitude", e.target.value)}
            />
          </div>

          <div className="field">
            <label>latitudeitute</label>
            <input
              value={newPosition.latitude}
              onChange={(e) => updateNewPosition("latitude", e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="add-data-set" onClick={handleAddDataSet}>
        Add DataSet
      </button>
    </div>
  );
};

export default function BasicModal() {
  const { isAddDataModalOpen, setIsAddDataModalOpen } = useContext(Context);
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={isAddDataModalOpen}
      onClose={() => setIsAddDataModalOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 700,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <AddNewDataSetModal />
      </Sheet>
    </Modal>
  );
}
