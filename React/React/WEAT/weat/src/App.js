import './App.css';
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';

const today = new Date();
function getDate()
{
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let day = weekdays[today.getDay()];
  let month = months[today.getMonth()];
  let year = today.getFullYear();
  let date = today.getDate();
  return `${day}, ${month} ${date}, ${year}`;
}

function App() {
  const currentDate = useState(getDate());
  const [time, setTime] = useState(today)

  useEffect(() =>{
    setInterval(() => setTime(new Date()), 1000)
  },[])

  return (
    <div className="App">
      <img src='./Settings Dots.svg' className='topright' alt = "Settings Button" width={50} height={50}/>
      <img src='./WEAT Blue Word Logo.svg' className = "WEAT-logo" alt = "logo" />
      <header className='Locations-bar'>
        <b>Toronto</b>
        <b>Montreal</b>
        <b>New York</b>
        <b>London</b>
      </header>
      <header className="App-header">
        <p>{currentDate} | Local Time - {time.toLocaleTimeString()}</p>
        <p>St. Catherines, ON</p>
        <div class = "container">
          <img src='./WEAT Sunny Button.svg' alt="logo" />
          <div className='topleft'>8°C</div>
          <div className='bottomright'>Daily Forecast</div>
        </div>
      </header>
    </div>
  );
}
/*function App() {
  return (
    <div className="WEAT" style={{backgroundColor: 'black'}}>
      <header className="WEAT-header">
        <img src={'./wireframe.png'} className="WEAT-logo" alt="logo" />
      </header>
    </div>
  );
}*/



export default App;
