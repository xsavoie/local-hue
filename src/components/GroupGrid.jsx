import { useState } from "react";
import GroupExpanded from "./GroupExpanded";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ groups, setGroups, scenes }) {
  const [selected, setSelected] = useState("");
  console.log(selected);

  const groupGridItems = groups.map((group) => (
    <GroupContainer
      key={group.id}
      id={group.id}
      name={group.name}
      state={group.state}
      lights={group.lights}
      groups={groups}
      setGroups={setGroups}
      scenes={scenes}
      selected={selected}
      setSelected={setSelected}
    />
  ));

  const GroupExpandedItem = (
    <GroupExpanded selected={selected} setSelected={setSelected} />
  );

  return (
    <>
      {selected && GroupExpandedItem}
      {!selected && <div className="group-grid">{groupGridItems}</div>}
    </>
  );
}
