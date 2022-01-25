import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
// import debounce from 'lodash.debounce';
// import { throttle } from 'lodash';
import useHueLight from "../hooks/useHueLight";

export default function BrightnessSlider(props) {
  const { bri, setBri, state } = props;

  const { handleBrightness } = useHueLight(props);

  const handleChange = (event, newValue) => {
    setBri(newValue);
    handleBrightness(newValue);
  };

  // const { state } = props;
  // const [brightness, setBrightness] = useState(state.bri);
  // const initialValues = Object.values(state.bri).join('');

  // const {
  //   handleBrightness,
  // } = useHueLight(props);

  // const handleChange = (event, newValue) => {
  //   setBrightness(newValue);
  // };

  // causing multiple reloads
  // useEffect(() => {
  //   handleBrightness(brightness);
  // }, [initialValues]);

  return (
    <Slider
      defaultValue={bri}
      valueLabelDisplay="auto"
      steps={10}
      // marks
      min={1}
      max={254}
      value={bri}
      onChange={handleChange}
      // onChange={throttle(handleChange, 100)}
    />
  );
}
