import { useState } from "react";
import useHueGroup from "../hooks/useHueGroup";
import BrightnessSlider from "./BrightnessSlider";
import ColorPicker from "./ColorPicker";
import ScenesDropdown from "./ScenesDropdown";
import "./styles/GroupListItem.css";
import ToggleLight from "./ToggleLight";

export default function GroupListItem(props) {
  const { name, id, state, scenes } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleGroupChange } = useHueGroup(props);

  const parsedScenes = scenes.filter((scene) => scene.group === id);


  return (
    <div className="list-item--container">
      <p>{`${name} / id: ${id}`}</p>
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
