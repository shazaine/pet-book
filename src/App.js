import React from 'react';
import Navbar from './components/navbar.js';
import Splash from './components/splash.js';
import Photos from './components/photos.js';
import Descriptions from './components/descriptions.js';

import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Splash/>
      <Photos/>
      <Descriptions/>
    </div>
  );
}

export default App;
