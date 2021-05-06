import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const FAQ = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>FAQ Page</Grid>
    </Grid>
  );
};

export default memo(FAQ);
