import axios from "axios";
import { xyColorCoverter } from "../lib/ColorConverters";
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
    let on = state.on;
    on = !on;
    const request = { on };
    console.log(request);

    return hueApiRequest(request)
      .then((res) => {
        setLights(updateLights(request));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeColor = async (color) => {
    // const request = xyColorCoverter(color);
    const request = color;

    return hueApiRequest(request)
      .then((res) => {
        setLights(updateLights(request));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBrightness = async (brightness) => {
    const request = { bri: brightness };
    // console.log(request);

    return hueApiRequest(request)
      .then((res) => {
        setLights(updateLights(request));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleToggle,
    updateLights,
    xyColorCoverter,
    handleChangeColor,
    handleBrightness,
  };
}
