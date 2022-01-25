import axios from "axios";
import { useEffect, useState } from "react";
import Group from "./Group";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function Groups() {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    return axios
      .get(`http://${bridge}/api/${username}/groups/`)
      .then((groups) => {
        const parsedGroups = Object.keys(groups.data).map(
          (group) => groups.data[group]
        );
        setGroupsData(parsedGroups);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const groupsToDisplay = groupsData.map((group) => (
    <Group key={group.name} name={group.name} lights={group.lights} />
  ));

  return <div>{groupsToDisplay}</div>;
}

// const groupsData = async () => {
//   try {
//     const groups = await axios.get(`http://${bridge}/api/${username}/groups`);
//     console.log(groups)
//     return groups;
//   } catch(error) {
//     console.log(error);
//   }
// }
// groupsData();
