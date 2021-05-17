import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import { memo, lazy, useContext } from "react";
import _ from "lodash";

import DashboardContext from "components/DashboardPage/context";
import { adminIcoInformationActions } from "./index.slice";
import StageDialog from "./components/StageDialog";
import useStyles from "./styles";

const StagesTimeline = lazy(() => import("components/StagesTimeline"));

const Stages = () => {
  const { isAdmin } = useContext(DashboardContext);
  const stages = useSelector(
    (state) => state.adminIcoInformationReducer.stages.data
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Edit stage
   */
  const editStage = (stage) =>
    dispatch(adminIcoInformationActions.setStageToEdit(stage));

  return (
    <Grid item xs={12}>
      <Paper>
        <StagesTimeline
          className={classes.stagesTimeline}
          stages={_.values(stages)}
          onClick={editStage}
          isAdmin={isAdmin}
        />
      </Paper>

      <StageDialog />
    </Grid>
  );
};

export default memo(Stages);
