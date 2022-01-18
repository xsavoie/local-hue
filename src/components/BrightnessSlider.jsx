import Slider from '@mui/material/Slider';
import { useState } from 'react';
// import debounce from 'lodash.debounce';
import { throttle } from 'lodash';



export default function BrightnessSlider(props) {
  const [brightness, setBrightness] = useState(50);
  // console.log(debounce)

  const handleChange = (event, newValue) => {
    setBrightness(newValue)
    console.log(brightness)
  }

  return (
    <Slider 
      defaultValue={brightness}
      valueLabelDisplay='auto'
      steps={10}
      marks
      min={0}
      max={100}
      value={brightness}
      onChange={throttle(handleChange, 100)}
    />
  );

}