import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import useStyles from "./styles";

const Page = lazy(() => import("../../../components/DashboardPage/Page"));

const Products = () => {
  const classes = useStyles();

  return (
    <Page title="ICO Information">
      <Grid item xs={12}>
        CONTENT HERE
      </Grid>
    </Page>
  );
};

export default memo(Products);
