import axios from 'axios';
import { useState } from 'react';
import SliderButton from './SliderButton';
 
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

const updateLights = (currentId, lightsState) => {
  let stateCopy = [...lightsState];
  console.log('stateCopy:', stateCopy)
  console.log("id:", currentId)

  const updatedLight = stateCopy.find((light) => light.id === currentId);
  console.log(updatedLight)
  updatedLight.state.on = !updatedLight.state.on
  
  const newState = lightsState.map(light => light.id === currentId ? updatedLight : light);

  return newState;
}


const handleToggle = async (lightId, currentState, lights, setLights) => {
  currentState = !currentState
  setLights(updateLights(lightId, lights))
  console.log("toggle:", currentState)

  try {
    return axios.put(
      `http://${bridge}/api/${username}/lights/${lightId}/state`,
      {"on": currentState});
  } catch (err) {
    console.log(err);
  }
}

export default function ToggleLight(props) {
  // const { bridge, username } = props;
  const { id, state, lights, setLights } = props;
  
  const toggle = state.on 
  // console.log("test", toggle)


  return (
    <div>
      <SliderButton 
      handleClick={() => handleToggle(id, toggle, lights, setLights)}
      />
      {/* <button onClick={() => handleToggle(id, toggle, lights, setLights)}>toggle!</button> */}
    </div>
  );
}