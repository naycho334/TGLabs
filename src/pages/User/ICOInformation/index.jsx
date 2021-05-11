import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { lazy, memo } from "react";

import useStyles from "./styles";

const Page = lazy(() => import("components/DashboardPage/Page"));

const ICOInformation = () => {
  const classes = useStyles();

  return (
    <Page title="ICO Information">
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Current ICO Stage
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Page>
  );
};

export default memo(ICOInformation);
