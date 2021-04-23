import { Box, Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import LightBlueGradientContainedButton from "../../components/Buttons/LightBlueGradientContainedButton";
import LightBlueTitleTypography from "../../components/Typography/LightBlueTitleTypography";
import LightBlueOutlinedButton from "../../components/Buttons/LightBlueOutlinedButton";
import GoldenLink from "../../components/Links/GoldenLink";
import useStyles from "./styles";

import { ReactComponent as TwoFaAuthentication } from "../../assets/svgs/icon_2fa-authentification.svg";
import { ReactComponent as EvSSLConnection } from "../../assets/svgs/icon_ev-ssl-connection.svg";
import { ReactComponent as DDOSProtection } from "../../assets/svgs/icon_ddos-protection.svg";

import secondIllustration from "../../assets/pngs/second_illustration.png";
import clsx from "clsx";

const Overview = () => {
  const classes = useStyles();

  return (
    <Box mb={8}>
      <Grid container spacing={8}>
        {/* Overview */}
        <Grid item xs={12}>
          <LightBlueTitleTypography
            className="underline underlineCenter"
            align="center"
            variant="h6"
          >
            What is TrueGaming Labs
          </LightBlueTitleTypography>
          <Typography variant="body1" className="white-text">
            We are a team of developers with extensive experience in gaming, and
            particularly Cryptocurrency gaming. Having seen many platforms whose
            fairness was questionable, we aimed to change that, but developing
            and offering transparently Provably Fair gaming solutions. Along
            with seeing platforms with slow development, letting down their user
            base, again we aimed at changing this by offering{" "}
            <GoldenLink component={RouterLink} to="#">
              White Label licencing solutions
            </GoldenLink>
            . This will cut down your development and launch times, as well as
            keeping your users engaged in the ever-changing landscape of Crypto
            Gaming.
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                className={classes.ourMissionImage}
                src={secondIllustration}
                component="img"
                maxWidth="100%"
              />
            </Grid>
            <Grid item>
              <LightBlueGradientContainedButton className="reverse">
                Our Products & Packages
              </LightBlueGradientContainedButton>
            </Grid>
            <Grid item>
              <LightBlueOutlinedButton>Whitepaper</LightBlueOutlinedButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Our mission */}
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LightBlueTitleTypography
                variant="h6"
                className="normal underline"
              >
                Our Mission
              </LightBlueTitleTypography>
              <Typography component="div" className="white-text">
                <Typography
                  component="p"
                  variant="subtitle2"
                  className="mb-3 normal"
                >
                  True Gaming Labs aims to be the go-to solution for game
                  developers or clients for quality and provably fair
                  cryptocurrency gaming developments. With ultimate transparency
                  of fairness at the core of what we do, we aim to build trust
                  with your users that the games they are playing are in fact
                  fair and unmanipulated.
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle2"
                  className="mb-3 normal"
                >
                  Many people also look to build a gaming platform but either
                  cannot afford the time, effort or funds required to build a
                  site from the ground up or{" "}
                  <GoldenLink component={RouterLink} to="#">
                    find reliable developers
                  </GoldenLink>{" "}
                  with the right{" "}
                  <GoldenLink component={RouterLink} to="#">
                    set of skills or knowledge
                  </GoldenLink>{" "}
                  for the job. True Gaming Labs aims at solving this issue by
                  doing the hard work, so you don’t have to!
                </Typography>
                <Typography
                  className="mb-3 normal"
                  variant="subtitle2"
                  component="p"
                >
                  By providing{" "}
                  <GoldenLink component={RouterLink} to="#">
                    easily customizable White Label solutions
                  </GoldenLink>{" "}
                  for clients, we take the hassle out of development, so you can
                  focus on more important aspects of your business model. You
                  can get up and running in a matter of days, rather than months
                  with a provably fair{" "}
                  <span className="orange">gaming platform</span>!
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems="center" spacing={4}>
                {[
                  { label: "DDoS#Protection", Icon: DDOSProtection },
                  { label: "EV SSL#Conntection", Icon: EvSSLConnection },
                  { label: "2FA#Authentication", Icon: TwoFaAuthentication },
                ].map(({ label, Icon }, index) => (
                  <Grid item key={label} className={classes.feature}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Icon />
                      </Grid>
                      <Grid item>
                        {label.split("#").map((word) => (
                          <Typography
                            className={clsx(index !== 0 && "normal")}
                            component="p"
                            variant="h6"
                            key={word}
                          >
                            {word}
                          </Typography>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
