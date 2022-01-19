import axios from "axios";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueLight(props) {
  const { id, state, lights, setLights } = props;

  const updateLights = (currentId, lightsState) => {
    let stateCopy = [...lightsState];
    const updatedLight = stateCopy.find((light) => light.id === currentId);
    updatedLight.state.on = !updatedLight.state.on;
    
    const newState = lightsState.map(light => light.id === currentId ? updatedLight : light);
  
    return newState;
  }
  
  const handleToggle = async (state) => {
    let on = state.on
    on = !on
    setLights(updateLights(id, lights))
  
    try {
      return axios.put(
        `http://${bridge}/api/${username}/lights/${id}/state`,
        {"on": on});
    } catch (err) {
      console.log(err);
    }
  };



  // function that runs hue api request and then updates state 
  const hueEventHandler = (apiReq, stateUpdater) => {
    apiReq();
    stateUpdater();
  }


  return {handleToggle, updateLights};
}

/*
const updateLights = (currentId, lightsState) => {
    let stateCopy = [...lightsState];
  
    const updatedLight = stateCopy.find((light) => light.id === currentId);
    updatedLight.state.on = !updatedLight.state.on;
    
    const newState = lightsState.map(light => light.id === currentId ? updatedLight : light);
  
    return newState;
  }
  
  // create function that handles toggle + state
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
  };
*/