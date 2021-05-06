import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Users = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Users Page</Grid>
    </Grid>
  );
};

export default memo(Users);
