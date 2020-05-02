import React from 'react';
import "./assets/css/core.css";

// Components
import NavBar from './components/navbar/NavBar.component';
import Tracking from './components/tracking/tracking.component';

// image
import mainImg from './assets/img/posten-lady.png';

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="grid-container">
        <div className="main-left">
          <Tracking />
        </div>
        <div className="main-right">
          <img src={mainImg} alt="" />
        </div>
      </main>
    </>
  );
}

export default App;
