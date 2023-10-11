import React, { useState, useContext } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Context } from "../context";
function FileUpload() {
  const { addDataSet, setIsFileUploadModalOpen } = useContext(Context);
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  const handleFileUpload = () => {
    try {
      const data = JSON.parse(fileContent);
      if (data.title && data.positions && data.color) {
        addDataSet(data);
        setIsFileUploadModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div className="file-upload">
      <input className="file-input" type="file" onChange={handleFileChange} />
      <button className="file-upload-btn" onClick={handleFileUpload}>
        Add DataSet
      </button>
    </div>
  );
}

export default function FileUploadModal() {
  const { isFileUploadModalOpen, setIsFileUploadModalOpen } =
    useContext(Context);
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={isFileUploadModalOpen}
      onClose={() => setIsFileUploadModalOpen(false)}
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
        <FileUpload />
      </Sheet>
    </Modal>
  );
}
