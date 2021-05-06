import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Transactions = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Transactions Page</Grid>
    </Grid>
  );
};

export default memo(Transactions);
