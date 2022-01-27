import "./styles/GroupContainer.css";
import { useState } from "react";
import BrightnessSlider from "./BrightnessSlider";
import useHueGroup from "../hooks/useHueGroup";
import ToggleLight from "./ToggleLight";
import ColorPicker from "./ColorPicker";

export default function GroupContainer(props) {
  const { name, id, state } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleBrightness, handleToggle, handleChangeColor } = useHueGroup(props);
  
  return (
    <div className="group-container">
      <div className="group-info">
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
          color={color}
          bri={bri}
          setColor={setColor}
          handleChangeColor={handleChangeColor}
        />
      </div>
    </div>
  );
}
