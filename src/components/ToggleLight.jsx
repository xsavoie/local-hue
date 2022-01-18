import { Switch } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import SliderButton from './SliderButton';
 
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

const updateLights = (currentId, lightsState) => {
  let stateCopy = [...lightsState];

  const updatedLight = stateCopy.find((light) => light.id === currentId);
  updatedLight.state.on = !updatedLight.state.on
  
  const newState = lightsState.map(light => light.id === currentId ? updatedLight : light);

  return newState;
}


const handleToggle = async (lightId, currentState, lights, setLights) => {
  currentState = !currentState
  setLights(updateLights(lightId, lights))
  // console.log("toggle:", currentState)

  try {
    return axios.put(
      `http://${bridge}/api/${username}/lights/${lightId}/state`,
      {"on": currentState});
  } catch (err) {
    console.log(err);
  }
}

export default function ToggleLight(props) {
  const { id, state, lights, setLights } = props;
  const toggle = state.on 


  return (
    <div>
      <Switch 
        checked={toggle}
        onClick={() => handleToggle(id, toggle, lights, setLights)}
      />
      {/* <SliderButton 
      handleClick={() => handleToggle(id, toggle, lights, setLights)}
      checked={state.on}
      /> */}
      {/* <button onClick={() => handleToggle(id, toggle, lights, setLights)}>toggle!</button> */}
    </div>
  );
}