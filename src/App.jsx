// import { Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Groups from "./components/Groups";
import LightContainer from "./components/LightContainer";
import useAppData from "./hooks/useAppData";

function App() {
  const { lights, setLights, groups, setGroups, scenes } = useAppData();
  const [groupView, setGroupView] = useState("");

  const lightsToDisplay = lights.map((light) => (
    <LightContainer
      key={light.id}
      id={light.id}
      name={light.name}
      state={light.state}
      lights={lights}
      setLights={setLights}
      scenes={scenes}
    />
  ));



  return (
    <div className="App">
      <Groups groups={groups} setGroups={setGroups} scenes={scenes} />
    </div>
  );
}

export default App;
