import axios from "axios";
import { updateState } from "../lib/updateState";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueLight(props) {
  const { id, lights, setLights } = props;

  const hueApiRequest = async (request) => {
    try {
      await axios.put(
        `http://${bridge}/api/${username}/lights/${id}/state`,
        request
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleLightChange = async (params) => {
    try {
      const request = await hueApiRequest(params);
      setLights(updateState(params, lights, id));
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLightChange };
}
