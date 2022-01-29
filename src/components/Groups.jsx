import { useState } from "react";
import GroupContainer from "./GroupContainer";
import GroupList from "./GroupList";
import SetView from "./SetView";
import "./styles/Group.css";

export default function Groups({ groups, setGroups, scenes }) {
  const [groupView, setGroupView] = useState("GRID");

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
      {/* <span> */}
      {/* <h3>Groups</h3> */}
      {/* </span> */}
      <div className="groups--container">
        <SetView groupView={groupView} setGroupView={setGroupView} />
        {groupView === "GRID" && <div className="group-grid">{groupContainers}</div>}
        {groupView === "LIST" && (
          <GroupList groups={groups} setGroups={setGroups} scenes={scenes} />
        )}
      </div>
    </div>
  );
}
