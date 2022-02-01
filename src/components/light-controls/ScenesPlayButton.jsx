export default function ScenesPlayButton({ selectedScene, handleSceneChange }) {
  const handlePlayScene = () => {
    handleSceneChange({"effect": "colorloop"})
    console.log(selectedScene)
  }

  return <button type="button" onClick={handlePlayScene}>►</button>
}