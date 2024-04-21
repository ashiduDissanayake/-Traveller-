import { useState, useRef } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { useValue } from '../../../context/ContextProvider';

const AddLocation = () => {
  const {
    state: {
      location: { lng, lat },
    },
    dispatch,
  } = useValue();

  const mapRef = useRef(null);
  const [manualLng, setManualLng] = useState('');
  const [manualLat, setManualLat] = useState('');

  const handleManualLocationSubmit = () => {
    if (manualLng && manualLat) {
      const newLng = Number(manualLng);
      const newLat = Number(manualLat);
      dispatch({
        type: 'UPDATE_LOCATION',
        payload: { lng: newLng, lat: newLat },
      });
      setManualLng(''); // Clear the manualLng input after submission
      setManualLat(''); // Clear the manualLat input after submission
      mapRef.current.panTo({ lat: newLat, lng: newLng });
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={8}
        center={{ lat, lng }}
        onLoad={(map) => (mapRef.current = map)}
      >
        {lng && lat && <Marker position={{ lat, lng }} draggable />}
      </GoogleMap>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="manualLat">Latitude:</label>
        <input
          id="manualLat"
          type="text"
          value={manualLat}
          onChange={(e) => setManualLat(e.target.value)}
        />
        <label htmlFor="manualLng">Longitude:</label>
        <input
          id="manualLng"
          type="text"
          value={manualLng}
          onChange={(e) => setManualLng(e.target.value)}
        />
        <button onClick={handleManualLocationSubmit}>Set Manual Location</button>
      </div>
    </LoadScript>
  );
};

export default AddLocation;
