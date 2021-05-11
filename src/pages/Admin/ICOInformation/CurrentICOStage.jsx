import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import Section from "components/Section";
import useStyles from "./styles";

const TargetProgress = lazy(() => import("components/TargetProgress"));

const CurrentICOStage = () => {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      <Section title="Current ICO Stage">
        <TargetProgress
          maxValue={2000000}
          value={900000}
          targets={[
            { label: "Softcap", value: 800000 },
            { label: "Hardcap", value: 1600000 },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(CurrentICOStage);
