import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Rewards = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Rewards Page</Grid>
    </Grid>
  );
};

export default memo(Rewards);
