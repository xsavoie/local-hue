import GroupListItem from "./GroupListItem";
import './styles/Group.css';


export default function GroupList({ groups, setGroups, scenes }) {
  
  const groupListItems = groups.map(group => (
    <GroupListItem 
    key={group.id}
    id={group.id}
    name={group.name}
    state={group.state}
    lights={group.lights}
    groups={groups}
    setGroups={setGroups}
    scenes={scenes}

    
    />
  ))

  return (
    <div className="group-list">
     {groupListItems}
    </div>
  );
}
