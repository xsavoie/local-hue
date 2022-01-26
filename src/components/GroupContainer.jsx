import ToggleLight from "./ToggleLight";
import "./GroupContainer.css";
import ColorPicker from "./ColorPicker";
import BrightnessSlider from "./BrightnessSlider";
import { useState } from "react";
import ToggleGroup from "./ToggleGroup";

export default function GroupContainer(props) {
  const { name, lights } = props;
  // const [bri, setBri] = useState(state.bri);
  // const [color, setColor] = useState(state.xy);

  return (
    <div className="group-container">
      <div className="group-info">
        <h4>{name}</h4>
        <h4>lights: {lights}</h4>
      </div>
      <div>
        <ToggleGroup />
      </div>
    </div>
  );
}
