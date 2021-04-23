import { Box, Grid, Typography } from "@material-ui/core";

import LightBlueGradientContainedButton from "../../components/Buttons/LightBlueGradientContainedButton";
import LightBlueTitleTypography from "../../components/Typography/LightBlueTitleTypography";
import BenefitsForInvestors from "./tokenomics/BenefitsForInvestors";
import BenefitsForClients from "./tokenomics/BenefitsForClients";
import TokenSupply from "./tokenomics/TokenSupply";
import useStyles from "./styles";

import { ReactComponent as ProfitDistribution } from "../../assets/svgs/profit_distribution.svg";
import { ReactComponent as Logo } from "../../assets/svgs/logo_symbol_tglab-inverse.svg";

import BenefitsIllustration from "../../assets/pngs/benefits_illustration.png";
import DiceBluered from "../../assets/pngs/dice.png";

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <Box pt={3} pb={5} px={4} className={classes.tokenomics} mb={7}>
      <img className="bluredDice" src={DiceBluered} alt="blured dice" />
      <LightBlueTitleTypography
        className="underline underlineCenter normal"
        align="center"
        variant="h6"
      >
        Tokenomics
      </LightBlueTitleTypography>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Grid container>
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
              <LightBlueTitleTypography
                component="div"
                align="center"
                variant="h5"
              >
                {Number(2000000).toLocaleString()}
                <Box ml={2} display="inline">
                  <Logo style={{ transform: "translateY(4px) scale(.9)" }} />
                </Box>
              </LightBlueTitleTypography>

              <TokenSupply />
            </Grid>

            {/* Profit */}
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={6}>
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

                  <LightBlueGradientContainedButton className="reverse">
                    ICO Token Distribution
                  </LightBlueGradientContainedButton>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className="white-text normal"
                    variant="caption"
                    component="h6"
                    gutterBottom
                  >
                    Profit Distribution:
                  </Typography>

                  <Box mt={4}>
                    <ProfitDistribution style={{ width: "100%" }} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Benefits */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <BenefitsForInvestors />
            </Grid>
            <Grid item xs={4}>
              <Box
                src={BenefitsIllustration}
                component="img"
                maxWidth="100%"
                mt={-7}
              />
            </Grid>
            <Grid item xs={4}>
              <BenefitsForClients />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tokenomics;
