import { Box, Grid, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { Fragment } from "react";
import clsx from "clsx";

import LightBlueTitleTypography from "../../components/Typography/LightBlueTitleTypography";
import useStyles from "./styles";

import { ReactComponent as CreateAcountOrange } from "../../assets/svgs/icon_create-account-orange.svg";
import { ReactComponent as WithdrawOrange } from "../../assets/svgs/icon_withdraw-orange.svg";
import { ReactComponent as InvestOrange } from "../../assets/svgs/icon_invest-orange.svg";
import { ReactComponent as RewardOrange } from "../../assets/svgs/icon_reward-orange.svg";
import { ReactComponent as NumberCircle } from "../../assets/svgs/circle_stroke.svg";

const HowITWorks = () => {
  const classes = useStyles();

  return (
    <Box pt={3} pb={5} px={4} className={classes.howItWorks} mb={6}>
      <LightBlueTitleTypography
        className="underline underlineCenter normal"
        variant="h6"
        align="center"
      >
        How it works
      </LightBlueTitleTypography>
      <Grid container spacing={4} alignItems="center">
        {[
          { label: "Create an Account", Icon: CreateAcountOrange },
          { label: "Invest", Icon: InvestOrange },
          { label: "Reward", Icon: RewardOrange },
          { label: "Withdraw", Icon: WithdrawOrange },
        ].map(({ label, Icon }, i, { length }) => (
          <Fragment key={i}>
            <Grid item className={classes.step}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <div className="number">
                    <NumberCircle />
                    <Typography
                      className="white-text"
                      component="span"
                      variant="h4"
                    >
                      {i + 1}
                      {i > 0 ? "." : ""}
                    </Typography>
                  </div>
                </Grid>

                <Grid item>
                  <Icon className="step-icon" />
                </Grid>

                <Grid item>
                  <Typography
                    className={clsx("white-text", i !== 0 && "normal")}
                    variant="subtitle2"
                  >
                    {label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {i + 1 < length && (
              <Grid item className={classes.nextStep}>
                <ArrowForward />
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default HowITWorks;
