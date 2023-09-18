import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapContainer = withScriptjs(
  withGoogleMap(({ defaultLocation, locationArray, isMarkerShown }) => {
    console.log("locationArray", locationArray);
    console.log("defaultLocation", defaultLocation);
    return (
      <>
        <GoogleMap
          defaultZoom={9}
          defaultCenter={defaultLocation}
          center={defaultLocation}
        >
          {isMarkerShown && <Marker position={defaultLocation} />}
          {isMarkerShown &&
            locationArray?.map((location, i) => {
              return (
                <Marker
                  key={i}
                  position={{
                    lat: Number(location.lat),
                    lng: Number(location.lon),
                  }}
                />
              );
            })}
        </GoogleMap>
      </>
    );
  })
);

export default MapContainer;

// import React from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// export const MapContainer = (props) => {
//   const mapStyles = {
//     width: "100%",
//     height: "100%",
//   };

//   const locations = [
//     { lat: 37.7749, lng: -122.4194 },
//     { lat: 40.7128, lng: -74.006 },
//     { lat: 51.5074, lng: -0.1278 },
//   ];
//   return (
//     <Map
//       google={props.google}
//       zoom={4}
//       style={mapStyles}
//       initialCenter={{ lat: 37.7749, lng: -122.4194 }}
//     >
//       {locations.map((location, index) => (
//         <Marker key={index} position={location} />
//       ))}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC1HmruuGRECq8KBhmJP33-uUq2H1xqrjQ",
// })(MapContainer);
