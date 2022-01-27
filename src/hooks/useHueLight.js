import axios from "axios";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueLight(props) {
  const { id, state, lights, setLights } = props;

  const hueApiRequest = async (request) => {
    try {
      return axios.put(
        `http://${bridge}/api/${username}/lights/${id}/state`,
        request
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateLights = (request) => {
    const param = Object.keys(request)[0];
    let lightsCopy = [...lights];

    const lightToUpdate = lightsCopy.find((light) => light.id === id);
    lightToUpdate.state = { ...lightToUpdate.state, [param]: request[param] };

    const updatedState = lights.map((light) =>
      light.id === id ? lightToUpdate : light
    );

    return updatedState;
  };

  const handleToggle = async (state) => {
    const params = { on: !state.on };

    try {
      const request = await hueApiRequest(params);
      setLights(updateLights(params));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBrightness = async (brightness) => {
    const params = { bri: brightness };

    try {
      const request = await hueApiRequest(params);
      setLights(updateLights(params));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeColor = async (color) => {
    const params = color;
    try {
      const request = await hueApiRequest(params);
      setLights(updateLights(params));
    } catch (error) {
      console.log(error);
    }
  };


  return {
    handleToggle,
    updateLights,
    handleChangeColor,
    handleBrightness,
  };
}
