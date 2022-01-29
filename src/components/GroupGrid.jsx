import { useGroupState } from "../lib/groupState";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ groups, setGroups, scenes }) {
  const { selected, setSelected } = useGroupState();

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

  return <div className="group-grid">{groupGridItems}</div>;
}
