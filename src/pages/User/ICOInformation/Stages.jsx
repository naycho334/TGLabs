import { memo, lazy, useContext } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import _ from "lodash";

import DashboardContext from "components/DashboardPage/context";
import CustomCard from "components/Section/CustomCard";
import useStyles from "./styles";

const StagesTimeline = lazy(() => import("components/StagesTimeline"));

const Stages = () => {
  const { isAdmin } = useContext(DashboardContext);
  const stages = useSelector(
    (state) => state.userIcoInformationReducer.stages.data
  );
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <CustomCard>
        <StagesTimeline
          className={classes.stagesTimeline}
          stages={_.values(stages)}
          isAdmin={isAdmin}
          isDashboard
        />
      </CustomCard>
    </Grid>
  );
};

export default memo(Stages);
