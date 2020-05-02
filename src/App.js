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
        <section className="main-left">
          <Tracking />
        </section>
        <section className="main-right">
          <img src={mainImg} alt="" />
        </section>
      </main>
    </>
  );
}

export default App;
