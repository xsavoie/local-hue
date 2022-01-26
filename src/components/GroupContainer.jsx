import "./GroupContainer.css";
import { useState } from "react";
import ToggleGroup from "./ToggleGroup";
import BrightnessSlider from "./BrightnessSlider";
import useHueGroup from "../hooks/useHueGroup";

export default function GroupContainer(props) {
  const { name, lights, id, state, groups, setGroups } = props;
  const [bri, setBri] = useState(state.bri);
  const [color, setColor] = useState(state.xy);

  const { handleBrightness } = useHueGroup(props);

  return (
    <div className="group-container">
      <div className="group-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleGroup
          id={id}
          state={state}
          groups={groups}
          setGroups={setGroups}
        />
        <BrightnessSlider
          id={id}
          bri={bri}
          setBri={setBri}
          handleBrightness={handleBrightness}
        />
      </div>
    </div>
  );
}
