import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
// import { throttle } from 'lodash';
import useHueLight from '../hooks/useHueLight';




export default function BrightnessSlider(props) {
  const { state } = props;
  const [brightness, setBrightness] = useState(state.bri);

  const {
    handleBrightness,
  } = useHueLight(props);

  const handleChange = (event, newValue) => {
    setBrightness(newValue);
  };

  useEffect(() => {
    handleBrightness(brightness);
  }, [brightness]);

  return (
    <Slider
      defaultValue={brightness}
      valueLabelDisplay='auto'
      steps={10}
      // marks
      min={1}
      max={254}
      value={brightness}
      onChange={handleChange}
    // onChange={throttle(handleChange, 100)}
    />
  );

}