import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import useStyles from "./styles";

const Page = lazy(() => import("../../../components/DashboardPage/Page"));

const Settings = () => {
  const classes = useStyles();

  return (
    <Page title="Settings">
      <Grid item xs={12}>
        CONTENT HERE
      </Grid>
    </Page>
  );
};

export default memo(Settings);
