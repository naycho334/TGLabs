import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Support = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Support Page</Grid>
    </Grid>
  );
};

export default memo(Support);
