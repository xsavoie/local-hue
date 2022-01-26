import { Switch } from '@mui/material';

export default function ToggleLight(props) {
  const { state, handleToggle } = props;

  return (
    <div>
      <Switch
        checked={state.on}
        onClick={() => handleToggle(state)}
      />
    </div>
  );
}