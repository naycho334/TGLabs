import { Box, Link, Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { memo } from "react";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import LightBlueTypography from "components/Typography/LightBlueTypography";
import TokenSupply from "./tokenomics/TokenSupply";
import Benefits from "./tokenomics/Benefits";
import useStyles from "./styles";

import { ReactComponent as ProfitDistributionHor } from "assets/svgs/profit_distribution_hor.svg";
import { ReactComponent as ProfitDistributionVer } from "assets/svgs/profit_distribution_ver.svg";
import { ReactComponent as Logo } from "assets/svgs/logo_symbol_tglab-inverse.svg";

import BenefitsIllustration from "assets/pngs/benefits_illustration.png";
import DiceBluered from "assets/pngs/dice.png";
import { endpoints } from "routes";

const data = {
  benefits: {
    investors: [
      "Receive income from multiple platforms",
      "Earn profits in 12+ of the top cryptocurrencies *",
      "Easy to manage Investor dashboard to track your investment from day 1",
      "Have wider access to a range of cryptocurrency gaming platforms",
      "The opportunity to licence your own platform for FREE! **",
      "Discounted set up fees on additional features",
    ],
    clients: [
      "White label solution for quick roll out to users and fast user base onboarding.",
      "Over 200,000 cryptocurrencies to add",
      "No set up fees*",
      "No fixed monthly fees**",
      "Multiple features and games to choose from",
      "On going maintenance",
      "24/7 Support",
      "Free updates for 12 months***",
    ],
  },
  conditions: {
    investors: [
      "* Based on the number of currency types each platform offers",
      "** No initial set up fees for VIP investors only. See pricing for more details",
    ],
    clients: [
      "* No initial set up fees for VIP investors only. See pricing for more details.",
      "** A percentage of platform profits, rather than a fixed monthly fee.",
      "*** Updates will be charged for at a minimal value after the first 12 months.",
    ],
  },
};

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.tokenomics}>
      <img className="bluredDice" src={DiceBluered} alt="blured dice" />
      <Grid container spacing={7}>
        <Grid item xs={12} id="tokenomics">
          <Grid container>
            <Grid item xs>
              <LightBlueTypography
                className="underline underlineCenter normal"
                align="center"
                variant="h6"
              >
                Tokenomics
              </LightBlueTypography>
            </Grid>
            {/* Tokens */}
            <Grid item xs={12}>
              <Typography
                className="white-text"
                variant="subtitle2"
                align="center"
                gutterBottom
              >
                Token supply:
              </Typography>
              <LightBlueTypography component="div" align="center" variant="h5">
                {Number(2000000).toLocaleString()}
                <Box ml={2} display="inline">
                  <Logo style={{ transform: "translateY(4px) scale(.9)" }} />
                </Box>
              </LightBlueTypography>

              <TokenSupply />
            </Grid>

            {/* Profit */}
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12} md={6} className="profitGain">
                  <Typography
                    className="white-text normal"
                    variant="caption"
                    component="h6"
                  >
                    Profit Gain:
                  </Typography>
                  <Box mb={8} mt={4}>
                    <Typography className="white-text normal" variant="caption">
                      When we set up a licence for a client, we retain a certain
                      percentage of the platform’s profits. This is the usual
                      amount platforms would set aside for maintenance and
                      development. Due to our low overheads, we can maintain
                      applications at lower financial levels, leaving a healthy
                      profit margin.
                    </Typography>
                  </Box>

                  <Link
                    to={endpoints.ico_info.index}
                    component={RouterLink}
                    underline="none"
                  >
                    <LightBlueGradientButton
                      variant="contained"
                      className="reverse"
                      disableElevation
                    >
                      ICO Token Distribution
                    </LightBlueGradientButton>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    className="white-text normal"
                    variant="caption"
                    component="h6"
                    gutterBottom
                  >
                    Profit Distribution:
                  </Typography>

                  <div className="profitDistribution" mt={4}>
                    <ProfitDistributionVer />
                    <ProfitDistributionHor />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Benefits */}
        <Grid item xs={12} id="benefits">
          <Grid container className="benefitsOrder">
            <Grid item xs={12} md={4}>
              <Benefits
                title="for Investors"
                benefits={data.benefits.investors}
                conditions={data.conditions.investors}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                src={BenefitsIllustration}
                component="img"
                maxWidth="100%"
                mb={-6}
                mt={-7}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Benefits
                title="for Clients"
                benefits={data.benefits.clients}
                conditions={data.conditions.clients}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(Tokenomics);
