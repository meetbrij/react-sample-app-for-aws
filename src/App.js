import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="desc">Boseong Nok Chha - Green Treen plantation - in South Korea.</div>
        <img src="https://breeze-test-version-control.s3.amazonaws.com/boseong_nokcha_photo.jpg" className="App-logo" alt="logo" />
        <p className="caption">
          @Source: Photography by Brijesh Bolar.
        </p>
        <div className="desc">This website is hosted as a static website on AWS S3</div>
      </header>
    </div>
  );
}

export default App;
