import "./App.css";
import GroupContainer from "./components/GroupContainer";
import LightContainer from "./components/LightContainer";
import useAppData from "./hooks/useAppData";

function App() {
  const { lights, setLights, groups, setGroups } = useAppData();

  const lightsToDisplay = lights.map((light) => (
    <LightContainer
      key={light.id}
      id={light.id}
      name={light.name}
      state={light.state}
      lights={lights}
      setLights={setLights}
    />
  ));

  const groupsToDisplay = groups.map((group) => (
    <GroupContainer
      key={group.id}
      id={group.id}
      name={group.name}
      state={group.state}
      lights={group.lights}
      groups={groups}
      setGroups={setGroups}
    />
  ));

  return (
    <div className="App">
      <h3>Lights</h3>
      <div className="container">{lightsToDisplay}</div>
      <h3>Groups</h3>
      <div className="container">{groupsToDisplay}</div>
    </div>
  );
}

export default App;
