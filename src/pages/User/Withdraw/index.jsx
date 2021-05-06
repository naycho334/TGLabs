import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Withdraw = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Withdraw Page</Grid>
    </Grid>
  );
};

export default memo(Withdraw);
