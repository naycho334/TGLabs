import { Box, Link, Typography } from "@material-ui/core";
import { lazy } from "react";
import { Link as RouterLink } from "react-router-dom";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import LightBlueOutlinedButton from "components/Buttons/LightBlueOutlinedButton";
import { endpoints } from "routes";
import useStyles from "./styles";

const ThemeAnimation = lazy(() =>
  import("components/Animations/ThemeAnimation")
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className="title" component="h1" align="center" variant="h5">
        A single Investment that generates profit from multiple sources.
      </Typography>
      <Typography component="h2" align="center" className="description">
        Introducing TGLAB, the native token of True Gaming Labs. We develop and
        licence White Label Cryptocurrency Casino platforms for client. For
        every platform licenced, we retain a percentage of its profits that gets
        distributed back to our investors. This provides a unique investment
        opportunity, providing income from multiple sources.
      </Typography>

      <Box display="flex" justifyContent="center" mt={6} mb={3}>
        {/* Register button */}
        <Link
          to={endpoints.signup.index}
          component={RouterLink}
          underline="none"
        >
          <LightBlueGradientButton
            className="registerButton"
            variant="contained"
            disableElevation
            size="large"
          >
            Register & Buy Token
          </LightBlueGradientButton>
        </Link>

        {/* Login button */}
        <Link
          to={endpoints.login.index}
          component={RouterLink}
          underline="none"
        >
          <LightBlueOutlinedButton className="long" size="large">
            Login
          </LightBlueOutlinedButton>
        </Link>
      </Box>

      <Typography variant="body2" align="center" className="question">
        How it works?
      </Typography>

      {/* Animation */}
      <div className="animationContainer">
        <div className="animation">
          <ThemeAnimation />
        </div>
      </div>
    </div>
  );
};

export default Header;
