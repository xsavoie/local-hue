import { Switch } from '@mui/material';
import axios from 'axios';
import useHueLight from '../hooks/useHueLight';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;


export default function ToggleGroup(props) {
  const { id, state, groups, setGroups } = props;
  console.log("groups:", groups)
  // const {
  //   handleToggle,
  // } = useHueLight(props);

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
    console.log("param", param)
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
    console.log(request);

    return hueApiRequest(request)
      .then((res) => {
        // console.log(res)
        setGroups(updateGroups(request));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <Switch
        checked={state.on}
        onClick={() => handleToggle(state)}
      />
    </div>
  );
}