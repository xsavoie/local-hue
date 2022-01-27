import ToggleLight from "./ToggleLight";
import "./styles/LightContainer.css";
import ColorPicker from "./ColorPicker";
import BrightnessSlider from "./BrightnessSlider";
import { useState } from "react";
import useHueLight from "../hooks/useHueLight";

export default function LightContainer(props) {
  const { id, name, state } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleBrightness, handleToggle, handleChangeColor } = useHueLight(props);

  return (
    <div className="light-container">
      <div className="light-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleLight
          id={id}
          state={state}
          handleToggle={handleToggle}
        />
        <BrightnessSlider
          id={id}
          bri={bri}
          setBri={setBri}
          handleBrightness={handleBrightness}
        />
         <ColorPicker
          id={id}
          bri={bri}
          color={color}
          setColor={setColor}
          handleChangeColor={handleChangeColor}
        />
      </div>
    </div>
  );
}
