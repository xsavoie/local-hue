import { useState } from "react";
import { useGroupState } from "../lib/groupState";
import GroupExpanded from "./GroupExpanded";
import GroupGrid from "./GroupGrid";
import GroupList from "./GroupList";
import SetView from "./SetView";
import "./styles/Group.css";

export default function Groups({ groups, setGroups, scenes }) {
  const { groupView, selected } = useGroupState();

  return (
    <div className="groups">
      <div className="groups--container">
        <SetView />
        {selected && (
          <GroupExpanded
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
          />
        )}
        {!selected && groupView === "GRID" && (
          <GroupGrid
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
          />
        )}
        {!selected && groupView === "LIST" && (
          <GroupList
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
          />
        )}
      </div>
    </div>
  );
}
