import "./App.css";
import Groups from "./components/Groups";
import Lights from "./components/Lights";
import useAppData from "./hooks/useAppData";

function App() {
  const { lights, setLights, groups, setGroups, scenes, loading } = useAppData();

  if (loading) return <p>Getting Hue Data...</p>
  return (
    <div className="App">
      {/* <Lights lights={lights} setLights={setLights} scenes={scenes} /> */}
      <Groups groups={groups} setGroups={setGroups} scenes={scenes} />
    </div>
  );
}

export default App;
