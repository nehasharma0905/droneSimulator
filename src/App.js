import "./App.css";
import "./Style/map.css";
import "./Style/bottomPanel.css";
import "./Style/dataset-modal.css";
import "./Style/fileUpload.css";
import MapContainer from "./Components/Map";
import BottomPanel from "./Components/BottomPanel";
import AddNewDataSetModal from "./Components/addNewDataSetModal";
import FileUploadModal from "./Components/fileUpload";
import { useContext } from "react";
import { Context } from "./context";

function App() {
  const { isSimulationOn } = useContext(Context);
  return (
    <div className="App">
      <div className="top-bar">
        <h3 className="App-title">Drone Simulator FlytBase - Neha Sharma</h3>
        <h3 className="App-title">
          Simulation : {isSimulationOn ? "ON" : "OFF"}
        </h3>
      </div>
      <MapContainer />
      <BottomPanel />
      <AddNewDataSetModal />
      <FileUploadModal />
    </div>
  );
}

export default App;
