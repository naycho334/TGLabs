import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import { CasinoIntegrationIllustration } from "components/Icons/Illustrations";
import LightBlueTypography from "components/Typography/LightBlueTypography";
import useStyles from "./styles";

const OtherServices = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.otherServices}
      justify="space-between"
      spacing={2}
      container
      alignItems="center"
    >
      <Grid item xs={12}>
        <LightBlueTypography
          className="underline underlineCenter"
          align="center"
          variant="h6"
        >
          Other Services
        </LightBlueTypography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="white-text bold">
              Crypto Casino Integrations
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className="white-text">
              Build your own Cryptocurrency casino using TG Labs Game Dev Suite!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className="white-text">
              With over 15 different Casino Style Games (See TG Lab Games) to
              integrate, you can get your Crypto Casino up and Running faster
              than ever before.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="animation" item xs={12} lg={6}>
        <CasinoIntegrationIllustration />
      </Grid>
    </Grid>
  );
};

export default memo(OtherServices);
