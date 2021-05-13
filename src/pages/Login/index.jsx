import { Typography, Grid, Paper, Link } from "@material-ui/core";
import { useCallback, useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link as RouterLink } from "react-router-dom";
import _ from "lodash";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import DefaultTextField from "components/TextFields/DefaultTextField";
import TGLogo from "components/Animations/TGLogo";
import useStyles from "./styles";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../components/Icons/Social";

import illustration from "assets/pngs/login_illustration.png";
import TGLabBlurredLogo from "assets/pngs/thlab2.png";

const Login = () => {
  const [height, setHeight] = useState(0);
  const classes = useStyles();
  const imageRef = useRef();

  /**
   * Handle change background size
   */
  const handleResize = useCallback(() => {
    const { current: dom } = imageRef;
    if (dom) {
      const height = _.get(dom.getClientRects(), [0, "y"], 0);
      setHeight(height);
      console.log({ height });
    }
  }, []);

  useEffect(() => {
    handleResize();
    setTimeout(handleResize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <PerfectScrollbar className="globalScrollbar" onScroll={handleResize}>
      <div className={classes.background}>
        <div className="color1" style={{ height: `${height}px` }} />
        <div className="color2" style={{ top: `${height}px` }} />
      </div>

      <div className={classes.modalContainer}>
        <div className="modalContainer">
          <Paper className="modal" elevation={3}>
            <Grid container justify="center">
              <Grid item xs={12} md={6} className="form">
                <Grid spacing={2} container>
                  <Grid item xs={12}>
                    <TGLogo className="purpleText logo" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      className="uppercase bold grey-text mb-3"
                      align="center"
                    >
                      Welcome back
                    </Typography>
                  </Grid>

                  {/* Username input */}
                  <Grid item xs={12}>
                    <DefaultTextField
                      InputLabelProps={{ shrink: true }}
                      label="Username or Email:"
                      className="whiteText"
                      autoComplete="off"
                      variant="outlined"
                      id="username"
                      size="small"
                      fullWidth
                    />
                  </Grid>

                  {/* Password input */}
                  <Grid item xs={12}>
                    <DefaultTextField
                      InputLabelProps={{ shrink: true }}
                      className="whiteText"
                      variant="outlined"
                      autoComplete="off"
                      label="Password:"
                      type="password"
                      id="password"
                      size="small"
                      fullWidth
                    />
                  </Grid>

                  {/* Forgot password link */}
                  <Grid item xs={12} className="passwordLink">
                    <Link component={RouterLink} underline="none" to={"#"}>
                      <Typography
                        className="bold purple-text"
                        variant="subtitle2"
                      >
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <LightBlueGradientButton
                      className="loginButton"
                      variant="contained"
                      disableElevation
                      size="large"
                      fullWidth
                    >
                      Login
                    </LightBlueGradientButton>
                  </Grid>

                  {/* Create account link */}
                  <Grid item xs={12} className="newAccountLink">
                    <Link component={RouterLink} underline="none" to={"#"}>
                      <Typography variant="overline">
                        Create an account
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className="image" ref={imageRef}>
                <img src={illustration} alt="illustration" />
                <img
                  className="blurredLogo"
                  src={TGLabBlurredLogo}
                  alt="blurred"
                />
              </Grid>
            </Grid>
          </Paper>
        </div>

        {/* Social media */}
        <div className="socialMediaButtons">
          {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
            (Icon, key) => (
              <div key={key}>
                <Link component={RouterLink} to={"#"} underline="none">
                  <Icon />
                </Link>
              </div>
            )
          )}
        </div>

        {/* Policies */}
        <div className="footer">
          <div className="rights">
            <Typography variant="subtitle2">
              © Copyright True Gaming Labs All rights reserved.
            </Typography>
          </div>
          <div className="links">
            <div>
              <Link component={RouterLink} to={"#"} underline="none">
                <Typography
                  className="white-text"
                  variant="subtitle2"
                  component="span"
                >
                  Terms of use
                </Typography>
              </Link>
            </div>
            <div>
              <Link component={RouterLink} to={"#"} underline="none">
                <Typography
                  className="white-text"
                  variant="subtitle2"
                  component="span"
                >
                  Privacy policy
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
  );
};

export default Login;
