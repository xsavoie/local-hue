import axios from "axios";
import { useEffect } from "react";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function Groups(){

  useEffect(() => {
    return axios.get(`http://${bridge}/api/${username}/groups/`)
      .then((groups) => {
        const data = Object.keys(groups.data).map(group => groups.data[group]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <p>Groups</p>
  );
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