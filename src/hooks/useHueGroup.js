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

  const updateGroups = (request) => {
    const param = Object.keys(request)[0];
    let groupsCopy = [...groups];

    const groupToUpdate = groupsCopy.find((group) => group.id === id);
    groupToUpdate.action = { ...groupToUpdate.action, [param]: request[param] };
    
    const updatedState = groups.map((group) =>
      group.id === id ? groupToUpdate : group
    );

    return updatedState;
  };

  const handleToggle = async (state) => {
    let on = state.on;
    on = !on;
    const request = { on };
    // console.log(request);

    return hueApiRequest(request)
      .then((res) => {
        // console.log(res)
        setGroups(updateGroups(request));
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
        setGroups(updateGroups(request));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const syncState = (lightState, groupState) => {
    // loop over lights inside group state, for each chance the lightstate to reflect change
  }

  return { handleToggle, updateGroups, handleBrightness }
}