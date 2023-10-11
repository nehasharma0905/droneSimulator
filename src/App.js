import "./App.css";
import "./Style/map.css";
import "./Style/bottomPanel.css";
import "./Style/dataset-modal.css";
import "./Style/fileUpload.css";
import MapContainer from "./Components/Map";
import BottomPanel from "./Components/BottomPanel";
import AddNewDataSetModal from "./Components/addNewDataSetModal";
import FileUploadModal from "./Components/fileUpload";

function App() {
  return (
    <div className="App">
      <h3 className="App-title">Drone Simulator FlytBase - Neha Sharma</h3>
      <MapContainer />
      <BottomPanel />
      <AddNewDataSetModal />
      <FileUploadModal />
    </div>
  );
}

export default App;
