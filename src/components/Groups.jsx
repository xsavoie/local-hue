import GroupContainer from "./GroupContainer";
import SetView from "./SetView";

export default function Groups({ groups, setGroups, scenes }) {
  const groupContainers = groups.map((group) => (
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
    <div>
      <SetView />
      <h3>Groups</h3>
      <div className="container">{groupContainers}</div>
    </div>
  );
}
