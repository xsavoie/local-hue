import Slider from "@mui/material/Slider";
import useHueLight from "../hooks/useHueLight";

export default function BrightnessSlider(props) {
  const { bri, setBri} = props;
  const { handleBrightness } = useHueLight(props);

  const handleChange = (event, newValue) => {
    setBri(newValue);
    handleBrightness(newValue);
  };

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
    />
  );
}
