import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "../../styles.css";

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export function Map() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div className="map-container">
      <MapComponent
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </MapComponent>
    </div>
  );
}
