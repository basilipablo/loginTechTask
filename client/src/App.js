import React, { useState } from 'react';
import './App.css';
import LoginBox from './components/loginBox.jsx';
import RegisterBox from './components/RegisterBox/RegisterBox';

function App() {
  const [loginScreen, setLoginScreen] = useState(true);

  const exampleSocket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

  exampleSocket.onopen = function () {
    exampleSocket.send({
      "topic": "subscribe",
      "to": "EURUSD:CUR"
    });
    console.log('socket send')
  };

  exampleSocket.onmessage = function(data) {
    console.log(data)
  }

  console.log(exampleSocket)

  return (
    <div className="App">
      <button className='screen-button' onClick={() => setLoginScreen(!loginScreen)}>{loginScreen ? 'Register' : 'Log In'}</button>
      <button className='stocks-box'>
        U$D
      </button>
      {loginScreen ? <LoginBox/> : <RegisterBox/>}
    </div>
  );
}

export default App;
