import { Stack, Switch, Typography } from "@mui/material";
import { useGroupState } from "../lib/groupState";


export default function SetView() {

  const { handleViewChange } = useGroupState();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Grid</Typography>
      <Switch onClick={handleViewChange} />
      <Typography>List</Typography>
    </Stack>
  );
}
