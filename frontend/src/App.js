import React from 'react';
import './App.css';
import CustomNav from './CustomNav';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <CustomNav/>
    </Router>
  );
}

export default App;
