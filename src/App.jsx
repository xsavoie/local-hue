import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import LightContainer from './components/LightContainer';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

const lightsParser = (data) => {
  let lightsArray = [];
  for (const light in data) {
    lightsArray.push(light);
  };

  const parsedArray = lightsArray.map(light => (
    light = {
      id: light,
      name: data[light].name,
      state: data[light].state
    }
  ))
  
  return parsedArray;
}

function App() {
  const [lights, setLights] = useState([]);
 
  useEffect(() => {
    return axios.get(`http://${bridge}/api/${username}/lights/`)
      .then(lights => {
        const lightsArray = lightsParser(lights.data);
        console.log(lightsArray)
        setLights(lightsArray);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  const lightsToDisplay = lights.map(light => (
    <LightContainer
      key={light.id}
      id={light.id}
      name={light.name}
      state={light.state}
      lights={lights}
      setLights={setLights}
    />
  ));
  

  return (
    <div className="App">
      {lightsToDisplay}
    </div>
  );
}

export default App;
