import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import ToggleLight from './components/ToggleLight';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

const lightsParser = (lights) => {
  console.log("data=", lights)
  let lightsArray = [];
  for (const light in lights) {
    console.log("light=", light)
  }
  
  return lightsArray
}

function App() {
  useEffect(() => {
    return axios.get(`http://${bridge}/api/${username}/lights/`)
      .then(lights => {
        console.log(lightsParser(lights.data));
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  

  return (
    <div className="App">
      {/* <ToggleLight bridge={bridge} username={username}/> */}
      <ToggleLight />
    </div>
  );
}

export default App;
