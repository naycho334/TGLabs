import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Settings = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Settings Page</Grid>
    </Grid>
  );
};

export default memo(Settings);
