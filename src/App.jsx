import "./App.css";
import Groups from "./components/Groups";
import Lights from "./components/Lights";
import useAppData from "./hooks/useAppData";
import { GroupStateProvider } from "./lib/groupState";

function App() {
  const { lights, setLights, groups, setGroups, scenes, loading } =
    useAppData();

  if (loading) return <p>Getting Hue Data...</p>;
  return (
    <GroupStateProvider>
      <div className="App">
        {/* <Lights lights={lights} setLights={setLights} scenes={scenes} /> */}
        <Groups groups={groups} setGroups={setGroups} scenes={scenes} />
      </div>
    </GroupStateProvider>
  );
}

export default App;
