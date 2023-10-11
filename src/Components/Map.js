/* global window */
import * as React from "react";
import { useState, useEffect } from "react";
import { Map, Source, Layer, Marker } from "react-map-gl";
import config from "./../data/config.json";
import routes from "./../data/routes.json";

const location = [
  [78.04167109185869, 27.17537627042042],
  [78.04209853794349, 27.17533474799359],
  [78.04138153071945, 27.175172238054962],
  [78.04201904861253, 27.175036327859646],
  [78.04202827149272, 27.17504879292431],
  [78.041306184592, 27.175099657699506],
  [78.04207236328133, 27.17504227219253],
  [78.04204957984864, 27.175163747911073],
  [78.04160326285683, 27.17505807361525],
  [78.04199175597073, 27.175129378110553],
];

const fullPath = routes.points.map((point) => [point.lng, point.lat]);

const MapContainer = () => {
  const [pointer, setPointer] = useState(location[0]);
  const [index, setIndex] = useState(0);

  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    setPointer(location[(index + 1) % (location.length - 1)]);
    setTimeout(() => {
      setIndex(index + 1);
    }, 1000);
  }, [index]);

  console.log({ pointer });

  const [path, setPath] = useState([]);

  const [fInd, setfInd] = useState(0);

  useEffect(() => {
    if (fInd < fullPath.length) {
      setPath([...path, fullPath[fInd]]);
      setTimeout(() => {
        setfInd(fInd + 1);
      }, 1000);
    }
  }, [fInd]);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 27.1751,
          longitude: 78.0421,
          zoom: 1,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={config.token}
      >
        <Marker
          longitude={pointer[0]}
          latitude={pointer[1]}
          anchor="bottom"
          style={{ position: "fixed", top: 0, left: 0 }}
        >
          <div className="point-div"></div>
        </Marker>

        {path.map((point, i) => (
          <Marker
            key={i}
            longitude={point[0]}
            latitude={point[1]}
            anchor="bottom"
            style={{ position: "fixed", top: 0, left: 0 }}
          >
            <div className="point-div"></div>
          </Marker>
        ))}
      </Map>
    </>
  );
};

export default MapContainer;
