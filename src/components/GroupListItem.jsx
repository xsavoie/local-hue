import { useState } from "react";
import useHueGroup from "../hooks/useHueGroup";
import BrightnessSlider from "./light-controls/BrightnessSlider";
import ColorPicker from "./light-controls/ColorPicker";
import ScenesDropdown from "./light-controls/ScenesDropdown";
import "./styles/GroupListItem.css";
import ToggleLight from "./light-controls/ToggleLight";

export default function GroupListItem(props) {
  const { name, id, state, scenes } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleGroupChange } = useHueGroup(props);

  const parsedScenes = scenes.filter((scene) => scene.group === id);


  return (
    <div className="list-item--container">
      <h4>{name}</h4>
      <ToggleLight id={id} state={state} handleToggle={handleGroupChange} />
      <BrightnessSlider
        id={id}
        bri={bri}
        setBri={setBri}
        handleBrightness={handleGroupChange}
      />
      <ColorPicker
        id={id}
        color={color}
        bri={bri}
        setColor={setColor}
        handleChangeColor={handleGroupChange}
      />
      <ScenesDropdown
        scenes={parsedScenes}
        handleSceneChange={handleGroupChange}
      />
    </div>
  );
}
