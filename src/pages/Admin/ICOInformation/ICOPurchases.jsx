import { Grid } from "@material-ui/core";
import { memo } from "react";

import Section from "components/Section";
import useStyles from "./styles";

const ICOPurchases = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={8}>
      <Section title="ICO Purchases"></Section>
    </Grid>
  );
};

export default memo(ICOPurchases);
