import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Referrals = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Referrals Page</Grid>
    </Grid>
  );
};

export default memo(Referrals);
