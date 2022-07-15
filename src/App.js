import React, {useState} from 'react';

import './App.css';

import Background from './components/Background/Background';
import Content from './components/Content/Content';

function App() {
  const [navState, setNavState] = useState(false)

  return (
    <div className="App">
      <Content
        navState={navState}
        setNavState={setNavState}
      ></Content>
      <Background
        navState={navState}
        setNavState={setNavState}
      ></Background>
    </div>
  );
}

export default App;
