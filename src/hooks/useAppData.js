import axios from "axios";
import { useEffect, useState } from "react";

export default function useAppData() {
  const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
  const username = process.env.REACT_APP_HUE_USERNAME;
  const [lights, setLights] = useState([]);
  const [groups, setGroups] = useState([]);

  const lightsParser = (data) => {
    let lightsArray = [];
    for (const light in data) {
      lightsArray.push(light);
    }
  
    const parsedArray = lightsArray.map(
      (light) =>
        (light = {
          id: light,
          name: data[light].name,
          state: data[light].state,
        })
    );
  
    return parsedArray;
  };


  // get all light info
  useEffect(() => {
    return axios
      .get(`http://${bridge}/api/${username}/lights/`)
      .then((lights) => {
        const lightsArray = lightsParser(lights.data);
        // temporeray reverse for dev purposes
        setLights(lightsArray.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get all groups info
  useEffect(() => {
    return axios
      .get(`http://${bridge}/api/${username}/groups/`)
      .then((groups) => {
        const parsedGroups = Object.keys(groups.data).map(
          (group) => ({...groups.data[group], id: group, state: groups.data[group].action, action: groups.data[group].state})
        );
        setGroups(parsedGroups.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return { lightsParser, lights, setLights, groups, setGroups }
}
