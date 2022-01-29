import { useState } from "react";
import GroupGrid from "./GroupGrid";
import GroupList from "./GroupList";
import SetView from "./SetView";
import "./styles/Group.css";

export default function Groups({ groups, setGroups, scenes }) {
  const [groupView, setGroupView] = useState("GRID");

  return (
    <div className="groups">
      <div className="groups--container">
        <SetView groupView={groupView} setGroupView={setGroupView} />
        {groupView === "GRID" && (
          <GroupGrid groups={groups} setGroups={setGroups} scenes={scenes} />
        )}
        {groupView === "LIST" && (
          <GroupList groups={groups} setGroups={setGroups} scenes={scenes} />
        )}
      </div>
    </div>
  );
}
