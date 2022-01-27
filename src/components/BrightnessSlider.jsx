import Slider from "@mui/material/Slider";

export default function BrightnessSlider(props) {
  const { bri, setBri, handleBrightness} = props;

  const handleChange = (event, newValue) => {
    setBri(newValue);
    handleBrightness({bri: newValue});
  };

  return (
    <Slider
      defaultValue={bri}
      valueLabelDisplay="auto"
      steps={10}
      min={1}
      max={254}
      value={bri}
      onChange={handleChange}
    />
  );
}
