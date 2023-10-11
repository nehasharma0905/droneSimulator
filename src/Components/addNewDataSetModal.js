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
  const [icon, setIcon] = useState(null);

  const [postions, setPositions] = useState([]);

  const [newPosition, setNewPosition] = useState({
    time: 0,
    long: 0,
    lat: 0,
  });

  const resetNewPosition = () => {
    setNewPosition({
      time: 0,
      long: 0,
      lat: 0,
    });
  };

  const addPosition = () => {
    setPositions([...postions, newPosition]);
  };

  const updatePositionByIndex = (index, key, value) => {
    const temp = [...postions];
    temp[index][key] = value;
    setPositions([...temp]);
  };

  const updateNewPosition = (key, value) => {
    const temp = { ...newPosition };
    temp[key] = value;
    setNewPosition({ ...temp });
  };

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

      <div className="field">
        <label>Icon</label>
        {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      </div>

      <div>
        {postions.map((el, index) => {
          <div className="positions-fields">
            <div className="field">
              <label>Time</label>
              <input
                value={el.time}
                onChange={(e) =>
                  updatePositionByIndex(index, "time", e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Longitute</label>
              <input
                value={el.long}
                onChange={(e) =>
                  updatePositionByIndex(index, "long", e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Latitute</label>
              <input
                value={el.lat}
                onChange={(e) =>
                  updatePositionByIndex(index, "lat", e.target.value)
                }
              />
            </div>
          </div>;
        })}
        <div className="positions-fields">
          <div className="field">
            <label>Time</label>
            <input
              value={newPosition.time}
              onChange={(e) => updateNewPosition("time", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Longitute</label>
            <input
              value={newPosition.long}
              onChange={(e) => updateNewPosition("long", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Latitute</label>
            <input
              value={newPosition.lat}
              onChange={(e) => updateNewPosition("lat", e.target.value)}
            />
          </div>
        </div>
        <button>Add Position </button>
      </div>
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
          maxWidth: 500,
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
