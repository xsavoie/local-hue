import { useState } from "react";
import GroupContainer from "./GroupContainer";
import GroupList from "./GroupList";
import SetView from "./SetView";
import './styles/Group.css'

export default function Groups({ groups, setGroups, scenes }) {
  const [groupView, setGroupView] = useState("LIST"); // SWITCH BACK***

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
    <div className="groups">
        <h3>Groups</h3>
        <SetView groupView={groupView} setGroupView={setGroupView} />
      <div className="groups--container">
        {groupView === "GRID" && groupContainers}
        {groupView === "LIST" && (
          <GroupList groups={groups} setGroups={setGroups} scenes={scenes} />
        )}
      </div>
    </div>
  );
}
