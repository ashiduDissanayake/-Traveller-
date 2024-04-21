import { useEffect } from 'react';
import { useValue } from '../../../context/ContextProvider';

const Geocoder = () => {
  const { dispatch } = useValue();

  useEffect(() => {
    const google = window.google;
    const geocoder = new google.maps.Geocoder();

    const handleGeocodeResult = (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        dispatch({
          type: 'UPDATE_LOCATION',
          payload: { lng: location.lng(), lat: location.lat() },
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    };

    const searchAddress = 'Galigamuwa Kegalle Sri Lanka';
    geocoder.geocode({ address: searchAddress }, handleGeocodeResult);

    // Clean up
    return () => {
      // Perform any cleanup if needed
    };
  }, [dispatch]);

  return null;
};

export default Geocoder;
