import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import Section from "components/Section";
import useStyles from "./styles";

const TopContributors = () => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Section title="Top Contributors"></Section>
    </Grid>
  );
};

export default memo(TopContributors);
