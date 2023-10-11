import React, { useContext } from "react";
import { Context } from "../context";
const SidePanal = () => {
  const { setIsAddDataModalOpen } = useContext(Context);
  return (
    <div className="SidePanal">
      <button className="dataset" onClick={() => setIsAddDataModalOpen(true)}>
        Add Dataset
      </button>
      <button className="fileupload">File Upload</button>
    </div>
  );
};

export default SidePanal;
