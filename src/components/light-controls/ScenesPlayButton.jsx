import { useState } from "react";

export default function ScenesPlayButton({ selectedScene, handleSceneChange,  }) {
const [colorloop, setColorloop] = useState(false);
  console.log(selectedScene)
  const handlePlayScene = () => {
    const request = colorloop ? "none" : "colorloop";
    setColorloop(!colorloop);
    handleSceneChange({"effect": request});
    console.log(selectedScene, request);
  }

  let buttonStatus = colorloop ? "❚❚" : "►";

  return <button type="button" onClick={handlePlayScene} disabled={!selectedScene}>{buttonStatus}</button>
}