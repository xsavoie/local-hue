import { Switch } from '@mui/material';
import useHueLight from '../hooks/useHueLight';


export default function ToggleLight(props) {
  const { state } = props;

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