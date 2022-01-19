import axios from "axios";
const ColorConverter = require("cie-rgb-color-converter");
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
  };

  // updates a specific light on/off --> update full state of light instead
  const updateLights = (currentId, lightsState) => {
    let stateCopy = [...lightsState];
    const updatedLight = stateCopy.find((light) => light.id === currentId);
    updatedLight.state.on = !updatedLight.state.on;

    const newState = lightsState.map(light => light.id === currentId ? updatedLight : light);

    return newState;
  };

  const xyColorCoverter = (color) => {
    let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
    let parsedXY = {
      xy: [parseFloat((xy.x).toFixed(4)), parseFloat((xy.y).toFixed(4))]
    };
    return parsedXY;
  };


  const handleToggle = (state) => {
    let on = state.on;
    on = !on;
    const request = { on };

    return hueApiRequest(request)
      .then(res => {
        setLights(updateLights(id, lights));
      })
      .catch(err => {
        console.log(err);
      })

  };


  const handleChangeColor = (color) => {
    const request = xyColorCoverter(color);

    return hueApiRequest(request)
      .then(res => {
        // setLights(updateLights(id, lights));
      })
      .catch(err => {
        console.log(err);
      })
  };


  const handleBrightness = (brightness) => {
    const request = {"bri": brightness};

    return hueApiRequest(request)
      .then(res => {
        // setLights(updateLights(id, lights));
      })
      .catch(err => {
        console.log(err);
      })
  }

  return { handleToggle, updateLights, xyColorCoverter, handleChangeColor, handleBrightness };
}