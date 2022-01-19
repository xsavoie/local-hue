import { Switch } from '@mui/material';
import useHueLight from '../hooks/useHueLight';


export default function ToggleLight(props) {
  const { state } = props;
  // console.log("PIZZA", props.lights);
  const {
    handleToggle,
  } = useHueLight(props);


  return (
    <div>
      <Switch
        checked={state.on}
        onClick={() => handleToggle(state)}
      />
    </div>
  );
}