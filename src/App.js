import React, { useEffect, useState } from 'react';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <div className="text-center">
        <div className="spinner-grow text-danger" role="status">
        </div>
        <div className="spinner-grow text-warning" role="status">
        </div>
        <div className="spinner-grow text-success" role="status">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
