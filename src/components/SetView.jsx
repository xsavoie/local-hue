import { Stack, Switch, Typography } from "@mui/material";


export default function SetView() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>List</Typography>
      <Switch />
      <Typography>Grid</Typography>
    </Stack>
  );
}
