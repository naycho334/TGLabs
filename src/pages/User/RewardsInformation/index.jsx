import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const RewardsInformation = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Rewards Information Page</Grid>
    </Grid>
  );
};

export default memo(RewardsInformation);
