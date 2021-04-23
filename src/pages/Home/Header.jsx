import { Box, Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import LightBlueGradientContainedButton from "../../components/Buttons/LightBlueGradientContainedButton";
import LightBlueOutlinedButton from "../../components/Buttons/LightBlueOutlinedButton";
import { endpoints } from "../../routes";
import useStyles from "./styles";

import main_illustration from "../../assets/pngs/main_illustration.png";

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        className={classes.title}
        component="h1"
        align="center"
        variant="h5"
      >
        A single Investment that generates profit from multiple sources.
      </Typography>
      <Typography component="h2" align="center" className={classes.description}>
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
          <LightBlueGradientContainedButton
            className={classes.registerButton}
            size="large"
          >
            Register & Buy Token
          </LightBlueGradientContainedButton>
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

      <Typography variant="body2" align="center" className={classes.question}>
        How it works?
      </Typography>

      <Box
        src={main_illustration}
        alt="main illustration"
        maxWidth="100%"
        minHeight={300}
        display="block"
        component="img"
        margin="auto"
        mt={-5.5}
      ></Box>
    </div>
  );
};

export default Header;
