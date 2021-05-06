import { Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Products Page</Grid>
    </Grid>
  );
};

export default memo(Products);
