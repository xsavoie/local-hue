import axios from "axios";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueLight(props) {
  const { id, state, lights, setLights } = props;

  
  const hueApiRequest = async (request) => {
    try {
      return axios.put(
        `http://${bridge}/api/${username}/lights/${id}/state`,
        request);
    } catch (err) {
      console.log(err);
    }
  }

  // updates a specific light on/off --> update full state of light instead
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
    const request = { on }

    return hueApiRequest(request)
      .then(res => {
        setLights(updateLights(id, lights))
      })
      .catch(err => {
        console.log(err)
      })

  };



  // function that runs hue api request and then updates state 



  return { handleToggle, updateLights };
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