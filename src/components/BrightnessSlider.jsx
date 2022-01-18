import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import { throttle } from 'lodash';
import axios from 'axios';

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

const handleBrightness = async (lightId, brightness, lights, setLights) => {
  try {
    return axios.put(
      `http://${bridge}/api/${username}/lights/${lightId}/state`,
      {"bri": brightness}
    )
  } catch (err) {
    console.log(err);
  }
}



export default function BrightnessSlider(props) {
  const { id, state, lights, setLights } = props;
  const [brightness, setBrightness] = useState(50);
  
  const handleChange = (event, newValue) => {
    setBrightness(newValue);
    console.log(brightness);
  };
  
  useEffect(() => {
    handleBrightness(id, brightness, lights, setLights);
    console.log("changed brightness")
  }, [brightness]); 

  return (
    <Slider 
      defaultValue={brightness}
      valueLabelDisplay='auto'
      steps={50} //not working
      // marks
      min={1}
      max={254}
      value={brightness}
      onChange={throttle(handleChange, 100)}
    />
  );

}