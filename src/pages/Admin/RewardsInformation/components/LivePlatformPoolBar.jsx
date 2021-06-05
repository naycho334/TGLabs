import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { memo } from "react";
import _ from "lodash";

import GoldenGradientButton from "components/Buttons/GoldenGradientButton";
import { adminLivePlatformPoolActions } from "../livePlatformPool.slice";

const LivePlatformPoolBar = () => {
  const dispatch = useDispatch();

  const addNewPlatform = () =>
    dispatch(adminLivePlatformPoolActions.togglePlatformDialog(true));

  return (
    <Grid item>
      <GoldenGradientButton
        className="rounded-1 bold black-text uppercase"
        onClick={addNewPlatform}
        startIcon={<Add />}
        variant="contained"
        disableElevation
      >
        Add new
      </GoldenGradientButton>
    </Grid>
  );
};

export default memo(LivePlatformPoolBar);
