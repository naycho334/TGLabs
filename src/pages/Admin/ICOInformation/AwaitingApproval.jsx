import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import Section from "components/Section";
import useStyles from "./styles";

const AwaitingApproval = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Section title="Awaiting Approval"></Section>
    </Grid>
  );
};

export default memo(AwaitingApproval);
