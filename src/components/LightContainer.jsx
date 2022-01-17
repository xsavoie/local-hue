import ToggleLight from "./ToggleLight";


export default function LightContainer(props) {
  const { id, name, state } = props;
  // console.log(props)

  return (
    <div>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <ToggleLight
        id={id}
        state={state}
        lights={props.lights}
        setLights={props.setLights}
      />
    </div>
  );
}