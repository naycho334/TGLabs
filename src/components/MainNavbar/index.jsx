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
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useResizeDetector } from "react-resize-detector";
import { HighlightOffRounded } from "@material-ui/icons";
import { useCallback, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";
import _ from "lodash";

import GoldenGradientButton from "components/Buttons/GoldenGradientButton";
import GolderLink from "components/Links/GoldenLink";
import { endpoints } from "routes";
import SideMenu from "./SideMenu";
import useStyles from "./styles";

import { ReactComponent as LogoIcon } from "assets/svgs/logo_tglab-inverse.svg";
import { HamburgerIcon, AccountIcon } from "../Icons/Icons";

const navbarLinks = {
  mega: [
    { title: "About", path: endpoints.home.index + "#about" },
    { title: "Mission", path: endpoints.home.index + "#mission" },
    { title: "Takenomics", path: endpoints.home.index + "#tokenomics" },
    { title: "Benefits", path: endpoints.home.index + "#benefits" },
    { title: "Statistics", path: endpoints.home.index + "#statistics" },
    { title: "Timeline", path: endpoints.home.index + "#timeline" },
    { title: "FAQ", path: endpoints.home.index + "#faq" },
    { title: "Products", path: endpoints.home.index + "#products" },
    { title: "Services", path: endpoints.services.index },
  ],
  user: [
    { title: "Login", path: endpoints.login.index },
    { title: "Sign Up", path: endpoints.signup.index },
  ],
};

const MainNavbar = () => {
  const [links, setLinks] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const { pathname, hash } = useLocation();
  const indicatorRef = useRef();
  const classes = useStyles();
  const currentPage = pathname + hash;

  const onResize = useCallback(() => {
    _.values(links)
      .filter((element) => element.classList.contains("active"))
      .forEach((element) => {
        const { offsetLeft, offsetWidth } = element.parentElement;
        indicatorRef.current.style.cssText = `left: ${offsetLeft}px; width: ${offsetWidth}px`;
      });
  }, [links]);

  const { ref: navbarRef } = useResizeDetector({ onResize });

  const hasActiveNavbar = !!_.find(navbarLinks.mega, (obj) =>
    currentPage.includes(obj.path)
  );

  /**
   * Set active nav link indicator
   */
  const setActiveNavLink = (index, element) => {
    if (element && !_.has(links, index))
      setLinks((state) => ({ ...state, [index]: element }));
  };

  /**
   * Toggle side menu
   */
  const toggleSideMenu = (target) =>
    setActiveMenu((state) => (state === target ? null : target));

  return (
    <AppBar position="fixed" elevation={0} color="transparent">
      <Toolbar
        className={clsx(classes.navbar, !_.isNull(activeMenu) && "sidemenu")}
        disableGutters
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Logo */}
            <Grid item xs>
              <Link
                onClick={() => toggleSideMenu(null)}
                to={endpoints.home.index}
                component={RouterLink}
              >
                <LogoIcon className={classes.logo} />
              </Link>
            </Grid>

            {/* Pages */}
            <Grid item className={classes.hideOnSmallScreens}>
              <Grid
                className={classes.links}
                ref={navbarRef}
                spacing={3}
                container
              >
                <div
                  className={clsx(
                    hasActiveNavbar && "active",
                    classes.indicator
                  )}
                  ref={indicatorRef}
                />
                {navbarLinks.mega.map(({ title, path }, index) => (
                  <Grid item key={path}>
                    <HashLink
                      className={clsx(
                        currentPage.includes(path) && "active",
                        classes.link
                      )}
                      ref={setActiveNavLink.bind(null, index)}
                      to={path}
                    >
                      <Typography variant="body2">{title}</Typography>
                    </HashLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Porfile */}
            <Grid item className={classes.hideOnSmallScreens}>
              <Grid container spacing={1} alignItems="center">
                {/* Acount */}
                <Grid item>
                  <IconButton className={classes.profile}>
                    <AccountIcon />
                  </IconButton>
                </Grid>

                {/* Login */}
                <Grid item>
                  <Link
                    to={endpoints.login.index}
                    component={RouterLink}
                    underline="none"
                  >
                    <GoldenGradientButton variant="contained" disableElevation>
                      Login
                    </GoldenGradientButton>
                  </Link>
                </Grid>

                {/* Sign up */}
                <Grid item>
                  <Box ml={1.25}>
                    <GolderLink
                      onClick={() => toggleSideMenu(null)}
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

            {/* Menu */}
            <Grid item className={classes.showOnSmallScreens}>
              <Grid container spacing={2} alignItems="center">
                {[
                  { type: "user", Icon: AccountIcon },
                  { type: "mega", Icon: HamburgerIcon },
                ].map(({ type, Icon }) => (
                  <Grid item key={type}>
                    <IconButton
                      onClick={toggleSideMenu.bind(null, type)}
                      className="navButton"
                    >
                      {activeMenu === type ? (
                        <HighlightOffRounded className="close" />
                      ) : (
                        <Icon />
                      )}
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Side Menu */}
            <SideMenu
              title={activeMenu === "user" ? "User Menu" : "Main Menu"}
              links={_.get(navbarLinks, activeMenu, [])}
              onClose={() => toggleSideMenu(null)}
              open={activeMenu !== null}
            />
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
