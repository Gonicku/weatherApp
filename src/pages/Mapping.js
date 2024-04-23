import React from 'react';
import MapContainer from '../components/MapContainer';

function Mapping() {
  return (
    <div style={{ backgroundColor: '#0097A7', minHeight: '100vh' }}>
      <div className="App" style={{ flexDirection: 'column', alignItems: 'center' }} >
        <h1> Travel Planner</h1>
        <p>Enter your start and end address and get real time information about your trip and the weather.</p>
        <MapContainer />
      </div>
    </div>
  );
}

export default Mapping;