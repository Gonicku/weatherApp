import React from 'react';
import MapContainer from '../components/MapContainer';
import TopMenu from '../components/TopMenu';

function Mapping() {
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5
     bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400`}>
      <div className='px-32'>
        <TopMenu></TopMenu>
      </div>
      <div className='App text-white items-center justify-around my-6 px-6'>
        <h1 className='font-medium'> Travel Planner</h1>
        <div>Enter your start and end address and get real time information about your trip and the weather.
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

export default Mapping;