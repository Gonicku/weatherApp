import './App.css';
import Message from './Components/Message'


function App() {
  return (
    <div>
      <div id='header' className="WEAT" style={{ backgroundColor: 'black' }}>
        <header className="WEAT-header">
          <img src={'./wireframe.png'} className="WEAT-logo" alt="logo" />
        </header>
      </div>
      <div>
        <Message></Message>
        <br></br>
      </div>
    </div>
  );
}

export default App;
