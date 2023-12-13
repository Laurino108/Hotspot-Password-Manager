  import React, { useState } from 'react';
  import './App.css';

  function App() {
    const [inputPassword, setInputPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);

    const correctPassword = process.env.REACT_APP_UNLOCK_PASSWORD;
    const wifiPassword = process.env.REACT_APP_WIFI_PASSWORD; // Set your password here

    const checkPassword = () => {
      if (inputPassword === correctPassword) {
        setShowPassword(true);
        setShowError(false);
      } else {
        showErrorPopup();
        setShowPassword(false);
      }
    };

    const showErrorPopup = () => {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000); // Popup will disappear after 3 seconds
    };

    return (
      <div className="App">
        <div className="container">
          <h3>Welcome to Laurin's Hotspot</h3>
          <p>Enter the Password which you can get from<br></br>Laurin to connect to his Hotspot</p><hr></hr>
          <h4>Enter Password</h4>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={{ marginTop: '-100px' }}
            placeholder="123456.."
          />
          <button onClick={checkPassword}>Authorize</button>
      
          {showPassword && (
            <p className="wifi-password">
              WLAN Password: {wifiPassword}
            </p>
          )}
        </div>

        <div className={`info-popup ${showError ? 'active' : ''}`}>
          Incorrect Password!
        </div>
      </div>
    );
  }

  export default App;
