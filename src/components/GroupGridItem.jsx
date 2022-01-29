import "./styles/GroupGridItem.css";
import { useState } from "react";
import BrightnessSlider from "./BrightnessSlider";
import useHueGroup from "../hooks/useHueGroup";
import ToggleLight from "./ToggleLight";
import ColorPicker from "./ColorPicker";
import ScenesDropdown from "./ScenesDropdown";

export default function GroupContainer(props) {
  const { name, id, state, scenes } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleGroupChange } = useHueGroup(props);

  const parsedScenes = scenes.filter((scene) => scene.group === id);

  return (
    <div className="grid-item--container">
      <header className="grid-item--info">
        <h4>{name}</h4>
      </header>
        <div className="grid-item--control">
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
    </div>
  );
}