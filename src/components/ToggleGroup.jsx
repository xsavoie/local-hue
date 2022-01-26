import { Switch } from '@mui/material';
import useHueGroup from '../hooks/useHueGroup';


export default function ToggleGroup(props) {
  const { state } = props;

  const {
    handleToggle,
  } = useHueGroup(props);


  return (
    <div>
      <Switch
        checked={state.on}
        onClick={() => handleToggle(state)}
      />
    </div>
  );
}