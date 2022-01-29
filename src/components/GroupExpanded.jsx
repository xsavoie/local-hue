import { useGroupState } from "../lib/groupState";
import "./styles/GroupExpanded.css";

export default function GroupExpanded({ groups, setGroups, scenes }) {
  const { selected, setSelected } = useGroupState();

  const selectedGroup = groups.filter((group) => group.id === selected);
  const groupData = selectedGroup[0];

  return (
    <div className="group-expanded">
      <header className="expanded--header">
        <p>{groupData.name}</p>{" "}
        <button type="button" onClick={() => setSelected("")}>
          &times;
        </button>
      </header>
      <div className="expanded--control"></div>
    </div>
  );
}
