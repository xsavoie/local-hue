import axios from "axios";
import { updateState } from "../lib/updateState";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useHueGroup(props) {
  const {id, groups, setGroups} = props;

  const hueApiRequest = async (request) => {
    try {
      await axios.put(
        `http://${bridge}/api/${username}/groups/${id}/action`,
        request
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleGroupChange = async (params) => {
    console.log("params", params)
    try {
      const request = await hueApiRequest(params);
      setGroups(updateState(params, groups, id));
    } catch (error) {
      console.log(error)
    }
  }


  // const syncState = (lightState, groupState) => {
  //   // loop over lights inside group state, for each chance the lightstate to reflect change
  // }

  return { handleGroupChange }
}