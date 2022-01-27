import axios from "axios";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueLight(props) {
  const { id, lights, setLights } = props;

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


  const updateState = (request, state) => {
    const param = Object.keys(request)[0];
    let stateCopy = [...state];
    const dataToUpdate = stateCopy.find((data) => data.id === id);
    dataToUpdate.state = { ...dataToUpdate.state, [param]: request[param] };
    
    const updatedState = state.map((data) =>
      data.id === id ? dataToUpdate : data
    );

    return updatedState;
  };

  


  const handleLightChange = async (params) => {
    try {
      const request = await hueApiRequest(params);
      setLights(updateState(params, lights));
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLightChange };
}
