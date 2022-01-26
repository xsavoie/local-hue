import "./GroupContainer.css";
import { useState } from "react";
import ToggleGroup from "./ToggleGroup";

export default function GroupContainer(props) {
  const { name, lights, id, state, groups, setGroups } = props;
  // const [bri, setBri] = useState(state.bri);
  // const [color, setColor] = useState(state.xy);

  return (
    <div className="group-container">
      <div className="group-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleGroup id={id} state={state} groups={groups} setGroups={setGroups} />
      </div>
    </div>
  );
}