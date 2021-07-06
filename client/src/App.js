import React, { useState } from 'react';
import './App.css';
import LoginBox from './components/loginBox.jsx';

function App() {
  const [loginScreen, setLoginScreen] = useState(true);

  return (
    <div className="App">
      {loginScreen ? <LoginBox/> : <div>Chill out, brother</div>}
    </div>
  );
}

export default App;
