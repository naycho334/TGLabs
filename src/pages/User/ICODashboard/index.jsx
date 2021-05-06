import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const ICODashboard = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>ICO Dashboard Page</Grid>
    </Grid>
  );
};

export default memo(ICODashboard);
