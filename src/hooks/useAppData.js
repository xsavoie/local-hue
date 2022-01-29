import axios from "axios";
import { useEffect, useState } from "react";
const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;

export default function useAppData() {
  const [lights, setLights] = useState([]);
  const [groups, setGroups] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // Fetch all lights data
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

  // Fetch all groups data
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

  // Fetch all scenes data
  async function fetchScenesApi() {
    try {
      const apiResponse = await axios.get(
        `http://${bridge}/api/${username}/scenes/`
      );
      const parsedScenes = Object.keys(apiResponse.data).map((scene) => ({
        ...apiResponse.data[scene],
        id: scene,
      }));
      setScenes(parsedScenes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    async function fetchAllApi() {
      setLoading(true);
      await fetchLightsApi();
      await fetchGroupApi();
      await fetchScenesApi();
      setLoading(false);
    }

    fetchAllApi();
  }, []);


  return {
    lights,
    setLights,
    groups,
    setGroups,
    scenes,
    setScenes,
    loading
  };
}
