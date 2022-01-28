import { Stack, Switch, Typography } from "@mui/material";


export default function SetView({ groupView, setGroupView }) {

  const handleViewChange = () => {
    if (groupView === "GRID") {
      return setGroupView("LIST");
    }
    return setGroupView("GRID");
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Grid</Typography>
      <Switch onClick={handleViewChange} />
      <Typography>List</Typography>
    </Stack>
  );
}
