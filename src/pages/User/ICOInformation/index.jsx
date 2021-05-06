import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const ICOInformation = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>ICOInformation Page</Grid>
    </Grid>
  );
};

export default memo(ICOInformation);
