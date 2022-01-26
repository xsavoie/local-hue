// import axios from "axios";
// import { useEffect, useState } from "react";
import "./App.css";
import Group from "./components/Group";
import GroupContainer from "./components/GroupContainer";
import Groups from "./components/Groups";
import LightContainer from "./components/LightContainer";
import Scenes from "./components/Scenes";
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

  console.log(groups)
  const groupsToDisplay = groups.map((group) => (
    <GroupContainer key={group.name} name={group.name} lights={group.lights} />
  ));

  console.log("app loaded");

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

// const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
// const username = process.env.REACT_APP_HUE_USERNAME;

// const lightsParser = (data) => {
//   let lightsArray = [];
//   for (const light in data) {
//     lightsArray.push(light);
//   }

//   const parsedArray = lightsArray.map(
//     (light) =>
//       (light = {
//         id: light,
//         name: data[light].name,
//         state: data[light].state,
//       })
//   );

//   return parsedArray;
// };
// const [lights, setLights] = useState([]);

// // get all light info
// useEffect(() => {
//   return axios
//     .get(`http://${bridge}/api/${username}/lights/`)
//     .then((lights) => {
//       const lightsArray = lightsParser(lights.data);
//       // console.log("light state", lightsArray);
//       // temporeray reverse for dev purposes
//       setLights(lightsArray.reverse());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// const lightsToDisplay = lights.map((light) => (
//   <LightContainer
//     key={light.id}
//     id={light.id}
//     name={light.name}
//     state={light.state}
//     lights={lights}
//     setLights={setLights}
//   />
// ));
