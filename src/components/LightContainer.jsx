import ToggleLight from "./ToggleLight";
import "./LightContainer.css"


export default function LightContainer(props) {
  const { id, name, state } = props;
  // console.log(props)

  return (
    <div className="light-container">
      <div className="light-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleLight
          id={id}
          state={state}
          lights={props.lights}
          setLights={props.setLights}
        />
      </div>
    </div>
  );
}