import "./App.css";
import MapContainer from "./Components/Map";
import SidePanal from "./Components/SidePanal";
import BottomPanal from "./Components/BottomPanal";
import AddNewDataSetModal from "./Components/addNewDataSetModal";

function App() {
  return (
    <div className="App">
      <div className="Map-SidePanel">
        <MapContainer />
        <SidePanal />
      </div>
      <BottomPanal />
      <AddNewDataSetModal />
    </div>
  );
}

export default App;
