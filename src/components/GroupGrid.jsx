import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ groups, setGroups, scenes }) {

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
    />
  ));

  return (
    <div className="group-grid">
     {groupGridItems}
    </div>
  );
}