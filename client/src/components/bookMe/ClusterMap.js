import React, { useEffect, useState } from "react";
import { useValue } from "../../context/ContextProvider";
import { getRooms } from "../../actions/room";
import { LoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { Avatar, Paper, Tooltip } from "@mui/material";

const ClusterMap = () => {
  const { state: { filteredRooms }, dispatch } = useValue();

  useEffect(() => {
    getRooms(dispatch);
  }, [dispatch]);

  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    if (filteredRooms) {
      const mappedClusters = filteredRooms.map((room) => ({
        lat: parseFloat(room.lat),
        lng: parseFloat(room.lng),
        roomId: room._id,
        uPhoto: room.uPhoto,
        uName: room.uName,
      }));
      setClusters(mappedClusters);
    }
  }, [filteredRooms]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "70%" }}
        center={{ lat: 7, lng: 80 }}
        zoom={10}
        onLoad={() => console.log("Map loaded")}
      >
        {clusters.map((cluster) => (
          <Marker
            key={cluster.roomId}
            position={{ lat: cluster.lat, lng: cluster.lng }}
          >
            <InfoWindow>
              <div>
                <Tooltip title={cluster.uName}>
                  <Avatar src={cluster.uPhoto}  elevation={4} >
                    {cluster?.name?.charAt(0).toUpperCase()}
                  </Avatar>
                </Tooltip>
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ClusterMap;
