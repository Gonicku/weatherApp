// MapContainer.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapContainer = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState(null);
  const [startWeather, setStartWeather] = useState(null);
  const [endWeather, setEndWeather] = useState(null);
  const [mapCenter, setMapCenter] = useState({lat: 43.6532, lng: -79.3832});// Default center (Toronto)})
  const [markers, setMarkers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMarkers([]);
    // Fetch directions using DirectionsService
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setResponse(null);
          setResponse(result);
          setMapCenter(result.routes[0].legs[0].start_location);
          const startMarker = {
            lat: result.routes[0].legs[0].start_location.lat(),
            lng: result.routes[0].legs[0].start_location.lng(),
          };
          const endMarker = {
            lat: result.routes[0].legs[result.routes[0].legs.length - 1].end_location.lat(),
            lng: result.routes[0].legs[result.routes[0].legs.length - 1].end_location.lng(),
          };
          setMarkers([startMarker, endMarker]);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  useEffect(() => {
    if (response) {
      // Extract start and end locations from the response
      const startLocation = response.routes[0].legs[0].start_location;
      const endLocation = response.routes[0].legs[response.routes[0].legs.length - 1].end_location;

      // Fetch weather for start location
      fetchWeather(startLocation.lat(), startLocation.lng(), setStartWeather);

      // Fetch weather for end location
      fetchWeather(endLocation.lat(), endLocation.lng(), setEndWeather);
    }
  }, [response]);

  // Function to fetch weather data from One Call API
  const fetchWeather = async (lat, lng, setWeather) => {
    const apiKey = 'ba3f8e4df191f546b2dbe2cf3985a27e';
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,daily&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleFormSubmit}>
        <label>
          Start:
          <input
            type="text"
            value={origin}
            placeholder="Enter a starting address..."
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            placeholder="Enter a destination..."
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Get Directions</button>
      </form>
      <div style={{ margin: '0 auto', height: '500px', width: '70%', marginBottom: '20px', marginTop: '20px'}}>
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={10}
          center={mapCenter} 
        >
          {response && <DirectionsRenderer directions={response} />}
        </GoogleMap>
      </div>
      {/* Display weather for start and end locations */}
      {startWeather && endWeather && (
    <div style={{ textAlign: 'center' }}>
            <p>Trip Length: {response.routes[0].legs[0].distance.text}</p>
            <p>Trip Duration: {response.routes[0].legs[0].duration.text}</p>
            <p>Weather at Start Location: {startWeather.current.temp}°C</p>
            <p>Feels Like: {startWeather.current.feels_like}°C</p>
            <p>{startWeather.current.weather.main}</p>
            <p>Weather at End Location: {endWeather.current.temp}°C</p>
            <p>Feels Like: {endWeather.current.feels_like}°C </p>
        </div>
      )}
    </div>
  );
};

export default MapContainer;
 