import React, { useState } from 'react';
import './App.css';
import LoginBox from './components/loginBox.jsx';
import RegisterBox from './components/RegisterBox/RegisterBox';
import EconomicStats from './components/EconomicStats/EconomicStats'

function App() {
  const [loginScreen, setLoginScreen] = useState(true);

  
  return (
    <div className="App">
      <button className='screen-button' onClick={() => setLoginScreen(!loginScreen)}>{loginScreen ? 'Register' : 'Log In'}</button>
      <EconomicStats />
      {loginScreen ? <LoginBox/> : <RegisterBox/>}
    </div>
  );
}

export default App;
