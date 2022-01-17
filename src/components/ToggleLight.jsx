import axios from 'axios';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;


const handleToggle = async (lightId, on) => {

  try {
    return axios.put(
      `http://${bridge}/api/${username}/lights/${lightId}/state`,
      {on});
  } catch (err) {
    console.log(err);
  }
}

export default function ToggleLight(props) {
  // const { bridge, username } = props;
  // console.log(bridge, username)


  return (
    <div>
      <button onClick={() => handleToggle(8, false)}>toggle!</button>
    </div>
  );
}