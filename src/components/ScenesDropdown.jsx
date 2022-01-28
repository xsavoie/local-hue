import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function ScenesDropdown({ scenes, handleSceneChange }) {

  const [selectedScene, setSelectedScene] = useState('');

  const listItems = scenes.map(scene => <MenuItem key={scene.id} value={scene.id}>{scene.name}</MenuItem>);
  // const listItems = scenes.map(scene => <MenuItem key={scene.id} value={`${scene.id}, ${scene.name}`}>{scene.name}</MenuItem>)
  // console.log(selectedScene);

  
  const handleChange = (scene) => {
    setSelectedScene(scene.target.value);
    const request = { scene: scene.target.value};
    handleSceneChange(request);
    console.log(selectedScene);
  }


  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Scene</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedScene}
        label="Scene"
        onChange={handleChange}
      >
        {listItems}
      </Select>
    </FormControl>
  );
}