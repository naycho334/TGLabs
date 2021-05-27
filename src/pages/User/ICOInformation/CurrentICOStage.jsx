import { Grid, Hidden, Typography } from "@material-ui/core";
import { lazy, memo } from "react";

import CurrentICOStageFooter from "./components/CurrentICOStageFooter";
import CompletionProgress from "./components/CompletionProgress";
import RemainingTokens from "./components/RemainingTokens";
import { formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

const EndingCountdown = lazy(() => import("components/EndingCountdown"));
const TargetProgress = lazy(() => import("components/TargetProgress"));

const CurrentICOStage = () => {
  const classes = useStyles();

  return (
    <Section
      className={classes.currentICOStage}
      title="Current ICO Stage"
      header={
        <Hidden mdDown>
          <Grid
            className="stage-title"
            alignItems="center"
            justify="center"
            container
          >
            <Grid item>
              <Typography variant="h5" className="purple-text">
                ICO Stage 1 (Public ICO)
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
      }
      footer={<CurrentICOStageFooter />}
    >
      <Hidden lgUp>
        <Typography variant="h5" className="purple-text stage-title" align="center">
          ICO Stage 1 (Public ICO)
        </Typography>
      </Hidden>

      <RemainingTokens price={formatPrice(1.98, "usd")} amount={545609} />

      <EndingCountdown time={Date.now() + 3600000 * 24 * 15} />

      <CompletionProgress progress={31} />

      <TargetProgress
        maxValue={2000000}
        value={900000}
        targets={[
          { label: "Softcap", value: 800000 },
          { label: "Hardcap", value: 1600000 },
        ]}
      />
    </Section>
  );
};

export default memo(CurrentICOStage);
