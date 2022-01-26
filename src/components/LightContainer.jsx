import ToggleLight from "./ToggleLight";
import "./LightContainer.css";
import ColorPicker from "./ColorPicker";
import BrightnessSlider from "./BrightnessSlider";
import { useState } from "react";
import useHueLight from "../hooks/useHueLight";

// todo: change id, state, lights, setlights to context and inject in components

export default function LightContainer(props) {
  const { id, name, state } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleBrightness } = useHueLight(props);

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
          lights={props.lights}
          setLights={props.setLights}
        />
        <BrightnessSlider
          id={id}
          bri={bri}
          setBri={setBri}
          handleBrightness={handleBrightness}
        />
         <ColorPicker
          id={id}
          color={color}
          bri={bri}
          setColor={setColor}
          state={state}
          lights={props.lights}
          setLights={props.setLights}
        />
      </div>
    </div>
  );
}
