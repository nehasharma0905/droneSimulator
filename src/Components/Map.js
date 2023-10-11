/* global window */
import { useState, useEffect, useContext } from "react";
import {
  Map,
  Layer,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import config from "./../data/config.json";
import routes from "./../data/routes.json";
import { Context } from "../context";
import MapMarker from "./mapMarker";

const MapContainer = () => {
  const { dataSet } = useContext(Context);
  const { isSimulationOn, recenter, setRecenter } = useContext(Context);

  // const [viewState, setViewState] = useState({ ...recenter });

  return (
    <Map
      initialViewState={{ ...recenter }}
      longitude={recenter.longitude}
      latitude={recenter.latitude}
      zoom={recenter.zoom}
      onMove={(evt) => {
        console.log({ evt });
        // setViewState(evt.viewState);
        setRecenter({
          longitude: evt.viewState.longitude,
          latitude: evt.viewState.latitude,
          zoom: evt.viewState.zoom,
        });
      }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxAccessToken={config.token}
    >
      {dataSet.map((data, i) => (
        <MapMarker key={i} data={data} />
      ))}
      <NavigationControl />
      <ScaleControl />
    </Map>
  );
};

export default MapContainer;
