import {
  IconButton,
  Typography,
  Container,
  Toolbar,
  AppBar,
  Link,
  Grid,
  Box,
} from "@material-ui/core";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { AccountCircleOutlined } from "@material-ui/icons";
import { useRef } from "react";
import _ from "lodash";

import GolderGradientContainedButton from "../Buttons/GolderGradientContainedButton";
import GolderLink from "../Links/GoldenLink";
import { endpoints } from "../../routes";
import useStyles from "./styles";

import { ReactComponent as Logo } from "../../assets/svgs/logo_tglab-inverse.svg";

const navbarLinks = [
  { title: "About", path: endpoints.about.index },
  { title: "Mission", path: endpoints.mission.index },
  { title: "Takenomics", path: endpoints.takenomics.index },
  { title: "Benefits", path: endpoints.benefits.index },
  { title: "Timeline", path: endpoints.timeline.index },
  { title: "Products", path: endpoints.products.index },
  { title: "Statistics", path: endpoints.statistics.index },
  { title: "FAQ", path: endpoints.faq.index },
];

const MainNavbar = () => {
  const { pathname } = useLocation();
  const indicatorRef = useRef();
  const classes = useStyles();

  const hasActiveNavbar = !!_.find(navbarLinks, (obj) => obj.path === pathname);

  /**
   * Set active nav link indicator
   */
  const setActiveNavLink = (element) => {
    if (element) {
      const parent = element.parentElement;
      const isActive = element.classList.contains("active");

      if (isActive) {
        const { offsetLeft, offsetWidth } = parent;
        indicatorRef.current.style.cssText = `left: ${offsetLeft}px; width: ${offsetWidth}px`;
      }
    }
  };

  return (
    <AppBar position="fixed" elevation={0} color="transparent">
      <Toolbar className={classes.navbar} disableGutters>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Logo */}
            <Grid item xs>
              <Link component={RouterLink} to={endpoints.home.index}>
                <Logo className={classes.logo} />
              </Link>
            </Grid>

            {/* Pages */}
            <Grid item>
              <Grid className={classes.links} container spacing={3}>
                {hasActiveNavbar && (
                  <div className={classes.indicator} ref={indicatorRef}></div>
                )}
                {navbarLinks.map(({ title, path }) => (
                  <Grid item key={path}>
                    <NavLink
                      className={classes.link}
                      activeClassName="active"
                      ref={setActiveNavLink}
                      to={path}
                      strict
                      exact
                    >
                      <Typography variant="body2">{title}</Typography>
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Porfile */}
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                {/* Acount */}
                <Grid item>
                  <IconButton className={classes.profile}>
                    <AccountCircleOutlined />
                  </IconButton>
                </Grid>

                {/* Login */}
                <Grid item>
                  <Link
                    to={endpoints.login.index}
                    component={RouterLink}
                    underline="none"
                  >
                    <GolderGradientContainedButton
                      variant="contained"
                      disableElevation
                    >
                      Login
                    </GolderGradientContainedButton>
                  </Link>
                </Grid>

                {/* Sign up */}
                <Grid item>
                  <Box ml={1.25}>
                    <GolderLink
                      to={endpoints.signup.index}
                      component={RouterLink}
                      underline="none"
                    >
                      Sign Up
                    </GolderLink>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
