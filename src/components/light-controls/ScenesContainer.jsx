import ScenesDropdown from "./ScenesDropdown";
import ScenesPlayButton from "./ScenesPlayButton";
import "../styles/ScenesContainer.css";
import { useState } from "react";

export default function ScenesContainer({ scenes, handleSceneChange }) {
  const [selectedScene, setSelectedScene] = useState("");

  return (
    <div className="scenes-container">
      <ScenesDropdown
        scenes={scenes}
        handleSceneChange={handleSceneChange}
        selectedScene={selectedScene}
        setSelectedScene={setSelectedScene}
      />
      <ScenesPlayButton selectedScene={selectedScene} handleSceneChange={handleSceneChange}/>
    </div>
  );
}
