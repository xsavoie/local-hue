import axios from "axios";
import { useEffect, useState } from "react";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useAppData() {
  const [lights, setLights] = useState([]);
  const [groups, setGroups] = useState([]);
  const [scenes, setScenes] = useState([]);

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
    async function fetchLightsApi() {
      try {
        const apiResponse = await axios.get(
          `http://${bridge}/api/${username}/lights/`
        );
        const lightsArray = lightsParser(apiResponse.data);
        setLights(lightsArray.reverse());
      } catch (error) {
        console.log(error);
      }
    }

    fetchLightsApi();
  }, []);

  // get all groups info
  useEffect(() => {
    async function fetchGroupApi() {
      try {
        const apiResponse = await axios.get(
          `http://${bridge}/api/${username}/groups/`
        );
        const groupsArray = Object.keys(apiResponse.data).map((group) => ({
          ...apiResponse.data[group],
          id: group,
          state: apiResponse.data[group].action,
          action: apiResponse.data[group].state,
        }));
        setGroups(groupsArray.reverse());
      } catch (error) {
        console.log(error);
      }
    }

    fetchGroupApi();
  }, []);

  useEffect(() => {
    async function fetchScenesApi() {
      try {
        const apiResponse = await axios.get(
          `http://${bridge}/api/${username}/scenes/`
        );
        const parsedScenes = Object.keys(apiResponse.data).map((scene) => ({
          ...apiResponse.data[scene],
          id: scene,
        }));
        // console.log(parsedScenes)
        setScenes(parsedScenes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchScenesApi();
  }, []);

  return {
    lights,
    setLights,
    groups,
    setGroups,
    scenes,
    setScenes,
  };
}
