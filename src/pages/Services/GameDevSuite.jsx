import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import { DevSuiteIllustration } from "components/Icons/Illustrations";
import useStyles from "./styles";

const GameDevSuite = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.gameDevSuite}
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
          Game Dev Suite
        </LightBlueTypography>
      </Grid>
      <Grid item xs={12} className="intro">
        <Typography className="white-text">
          Start Tokenizing your game now, with the&nbsp;
          <strong>TG Labs Game Dev Suite</strong>.<br /> Our simple and easy to
          use Game Dev SDK will speed up the time it takes from development to
          launch, increasing your game revenues faster.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className="white-text">
              <strong>TG Labs Game Development Suite</strong> will accelerate
              your game development process and Blockchain integration. By
              taking care of the user management systems for you, you can focus
              your development times on what matters most, the game itself!
              <p />
              Our Game Dev Suite will make creating users, in-game shops, user
              inventories and many other things so much easier! It provides an
              in-game reward mechanism for your users and integrated
              cryptocurrency payment system, powered by True Pay.
              <p />
              Create your own mineable cryptocurrency and create your own NFT’s
              for inventory items or as rewards, all powered by the Binance
              Smart Chain. This will allow you to Tokenize your game faster,
              giving you access to a massive user base withing the
              Cryptocurrency community.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <DevSuiteIllustration className="illustration" />
      </Grid>
    </Grid>
  );
};

export default memo(GameDevSuite);
