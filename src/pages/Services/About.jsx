import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import { TruePayIllustration } from "components/Icons/Illustrations";
import { TruePayLogoIcon } from "components/Icons/Icons";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.about}
      justify="space-between"
      spacing={2}
      container
    >
      <Grid item xs={12}>
        <LightBlueTypography
          className="underline underlineCenter normal"
          align="center"
          variant="h6"
        >
          TruePay
        </LightBlueTypography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TruePayLogoIcon className="truePayLogo" />
          </Grid>
          <Grid item xs={12}>
            <Typography className="white-text text">
              <strong>True Pay</strong> is the most advanced Blockchain Payment
              Gateway available today. It Bridges Cryptocurrency blockchains to
              allow you to offer your clients a wider range of payment methods,
              drastically increasing your client base. Using our easy to use
              SDK, you can start accepting cryptocurrency into your project in
              minutes, rather than months.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TruePayIllustration className="illustration" />
      </Grid>
    </Grid>
  );
};

export default memo(About);
