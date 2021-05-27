import {
  Typography,
  IconButton,
  Container,
  Grid,
  Box,
} from "@material-ui/core";
import { Fragment } from "react";
import _ from "lodash";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import GoldenGradientButton from "components/Buttons/GoldenGradientButton";
import WhiteLink from "components/Links/WhiteLink";
import { endpoints } from "routes";
import useStyles from "./styles";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Icons/Social";

import { ReactComponent as TGLabsLogo } from "assets/svgs/logo_tglabs-inverse.svg";
import { ReactComponent as BeioLogo } from "assets/svgs/logo_beio-inverse.svg";

import TgLabBlurred from "assets/pngs/thlab2.png";

const links = {
  list1: [
    { title: "About", path: endpoints.home.index + "#about" },
    { title: "Mission", path: endpoints.home.index + "#mission" },
    { title: "Tokenomics", path: endpoints.home.index + "#tokenomics" },
    { title: "Benefits", path: endpoints.home.index + "#benefits" },
  ],
  list2: [
    { title: "Timeline", path: endpoints.home.index + "#timeline" },
    { title: "Products", path: endpoints.home.index + '#products' },
    { title: "Services", path: endpoints.services.index },
    { title: "Statistics", path: endpoints.home.index + "#statistics" },
    { title: "FAQ", path: endpoints.home.index + "#faq" },
  ],
  list3: [
    { title: "Login", path: endpoints.login.index },
    { title: "Sign Up", path: endpoints.signup.index },
  ],
};

const socialLinks = [
  { Icon: FacebookIcon, href: "#" },
  { Icon: InstagramIcon, href: "#" },
  { Icon: TwitterIcon, href: "#" },
  { Icon: LinkedInIcon, href: "#" },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <Box mb={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} md>
              <TGLabsLogo />
              <Box maxWidth={480} my={2}>
                <Typography className="white-text" variant="body2">
                  We are a team of developers with extensive experience in
                  gaming, and particularly Cryptocurrency gaming.
                </Typography>
              </Box>
              <Box display="flex">
                {socialLinks.map(({ Icon, href }, i) => (
                  <Box key={i} mr={1}>
                    <IconButton>
                      <Icon style={{ width: `20px`, height: `20px` }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Grid>
            {_.values(links).map((list, i, { length: l1 }) => (
              <Grid item xs={6} sm="auto" key={i}>
                <Box maxWidth={130}>
                  <Grid container spacing={1}>
                    {list.map(({ title, path }, j, { length: l2 }) => (
                      <Fragment key={path}>
                        <Grid item xs={12}>
                          <WhiteLink underline="none" to={path}>
                            {title}
                          </WhiteLink>
                        </Grid>

                        {i + 1 === l1 && j + 1 === l2 && (
                          <Grid item xs={12}>
                            <LightBlueTypography component="span">
                              support@tglab.io
                            </LightBlueTypography>
                          </Grid>
                        )}
                      </Fragment>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            ))}
            <Grid item xs>
              <div className="buyToken">
                <GoldenGradientButton variant="contained" className="reverse">
                  Buy Token
                </GoldenGradientButton>

                <img src={TgLabBlurred} alt="TGLab blurred" />
              </div>
            </Grid>
          </Grid>
        </Box>

        <Grid alignItems="center" className="bottom" spacing={2} container>
          <Grid item>
            <Typography variant="caption" className="white-text">
              © Copyright True Gaming Labs All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md>
            <div className="bottomLinks">
              <WhiteLink underline="none" to="#">
                Terms of Use
              </WhiteLink>
              <WhiteLink underline="none" to="#">
                Privacy Policy
              </WhiteLink>
            </div>
          </Grid>
          <Grid item>
            <Typography variant="caption" className="white-text credits">
              Designed by <BeioLogo />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
