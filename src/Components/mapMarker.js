import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import { Map, Layer, Marker } from "react-map-gl";

const MapMarker = (dataSet) => {
  const { isSimulationOn } = useContext(Context);

  const [dataSimulation, setDataSimulation] = useState([]);

  const [fullPath, setFullPath] = useState([]);

  const [pathCovered, setPathCovered] = useState([]);

  const [currIndex, setCurrIndex] = useState(0);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      setDataSimulation(dataSet.data);
      setFullPath(dataSet.data.positions);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  console.log({ dataSimulation, fullPath, dataSet });

  useEffect(() => {
    if (currIndex < fullPath?.length - 1 && isSimulationOn && isInitialized) {
      setPathCovered([...pathCovered, fullPath[currIndex]]);
      const next = new Date(fullPath[currIndex + 1].timestamp);
      const current = new Date(fullPath[currIndex].timestamp);
      const miliseconds = Math.abs(next.getTime() - current.getTime());
      setTimeout(() => {
        setCurrIndex(currIndex + 1);
      }, miliseconds);
    }
  }, [currIndex, isSimulationOn]);

  return pathCovered.map((point, i) => (
    <Marker
      key={i}
      longitude={point.longitude}
      latitude={point.latitude}
      anchor="bottom"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <div
        className="point-div"
        style={{ backgroundColor: dataSimulation.color }}
      ></div>
    </Marker>
  ));
};

export default MapMarker;
