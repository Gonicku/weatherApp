// App.js
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mapping from "./pages/Mapping";
import Home from "./pages/Home";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Mapping" element={<Mapping/>}/>
      </Routes>
    </Router>
  )
}

export default App;
