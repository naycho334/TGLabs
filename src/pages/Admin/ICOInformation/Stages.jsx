import { useDispatch, useSelector } from "react-redux";
import { memo, lazy, useContext } from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

import DashboardContext from "components/DashboardPage/context";
import { adminIcoInformationActions } from "./index.slice";
import CustomCard from "components/Section/CustomCard";
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
      <CustomCard>
        <StagesTimeline
          className={classes.stagesTimeline}
          stages={_.values(stages)}
          onClick={editStage}
          isAdmin={isAdmin}
          isDashboard
        />
      </CustomCard>

      <StageDialog />
    </Grid>
  );
};

export default memo(Stages);
