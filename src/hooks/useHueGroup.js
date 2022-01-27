import axios from "axios";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueGroup(props) {
  const {id, groups, setGroups} = props;

  const hueApiRequest = async (request) => {
    try {
      return axios.put(
        `http://${bridge}/api/${username}/groups/${id}/action`,
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
    dataToUpdate.action = { ...dataToUpdate.action, [param]: request[param] };
    
    const updatedState = state.map((data) =>
      data.id === id ? dataToUpdate : data
    );

    return updatedState;
  };

  const handleGroupChange = async (params) => {
    try {
      const request = await hueApiRequest(params);
      setGroups(updateState(params, groups));
    } catch (error) {
      console.log(error)
    }
  }


  // const syncState = (lightState, groupState) => {
  //   // loop over lights inside group state, for each chance the lightstate to reflect change
  // }

  return { handleGroupChange }
}