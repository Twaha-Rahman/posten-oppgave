import React from 'react';
import "./assets/css/core.css";

// Components
import NavBar from './components/Navbar/NavBar.component'

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
      </main>
    </div>
  );
}

export default App;
