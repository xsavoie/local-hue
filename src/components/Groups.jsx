import { useEffect, useState } from "react";
import GroupExpanded from "./GroupExpanded";
import GroupGrid from "./GroupGrid";
import GroupList from "./GroupList";
import SetView from "./SetView";
import "./styles/Group.css";

export default function Groups({ groups, setGroups, scenes }) {
  const [groupView, setGroupView] = useState("GRID");
  const [selected, setSelected] = useState("");

  return (
    <div className="groups">
      <div className="groups--container">
        <SetView groupView={groupView} setGroupView={setGroupView} />
        {selected && (
          <GroupExpanded
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {!selected && groupView === "GRID" && (
          <GroupGrid
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {!selected && groupView === "LIST" && (
          <GroupList
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
    </div>
  );
}
