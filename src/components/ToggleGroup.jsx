import { Switch } from '@mui/material';
import axios from 'axios';
import useHueLight from '../hooks/useHueLight';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;


export default function ToggleGroup(props) {
  const { id, state } = props;
  console.log(state)
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

  const handleToggle = async (state) => {
    let on = state.on;
    on = !on;
    const request = { on };
    console.log(request);

    return hueApiRequest(request)
      .then((res) => {
        console.log(res)
        // setLights(updateLights(request));
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