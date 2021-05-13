import {
  IconButton,
  Toolbar,
  AppBar,
  Button,
  Hidden,
  Badge,
  Grid,
  Box,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import propTypes from "prop-types";

import LightBlueGradientButton from "../Buttons/LightBlueGradientButton";
import {
  NotificationIcon,
  HamburgerIcon,
  TGLogoSmIcon,
  SupportIcon,
  AccountIcon,
  CloseIcon,
} from "../Icons/Icons";
import useStyles from "./styles";

const Navbar = (props) => {
  const { open, isAdmin, openSidebar } = props;
  const classes = useStyles();

  return (
    <AppBar
      className={classes.navbar}
      color="transparent"
      position="static"
      elevation={0}
    >
      <Toolbar className={classes.drawer}>
        <Grid alignItems="center" container>
          <Grid item xs>
            <Hidden smDown>
              {!isAdmin && (
                <LightBlueGradientButton
                  variant="contained"
                  endIcon={<Add />}
                  disableElevation
                >
                  Invest
                </LightBlueGradientButton>
              )}
            </Hidden>
            <Hidden mdUp>
              <Box display="flex" alignItems="center">
                <TGLogoSmIcon style={{ marginRight: 12 }} />

                {/* Menu button */}
                <IconButton onClick={() => openSidebar(!open)}>
                  {open ? <CloseIcon /> : <HamburgerIcon />}
                </IconButton>
              </Box>
            </Hidden>
          </Grid>

          <Grid item>
            <Grid alignItems="center" container spacing={1}>
              {/* Support button */}
              <Grid item>
                <Hidden smDown>
                  <Button startIcon={<SupportIcon />}>Support</Button>
                </Hidden>
                <Hidden mdUp>
                  <IconButton>
                    <SupportIcon />
                  </IconButton>
                </Hidden>
              </Grid>

              <Grid item>
                <div className={classes.seperator} />
              </Grid>

              {/* Notifications */}
              <Grid item>
                <IconButton>
                  <Badge
                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                    color="secondary"
                    badgeContent={4}
                    variant="dot"
                  >
                    <NotificationIcon />
                  </Badge>
                </IconButton>
              </Grid>

              {/* User account */}
              <Grid item>
                <IconButton>
                  <Badge
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    color="secondary"
                    badgeContent={4}
                    variant="dot"
                  >
                    <AccountIcon />
                  </Badge>
                </IconButton>
              </Grid>
              <Hidden smDown>
                <Grid item>username@gmail.com</Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  openSidebar: propTypes.func.isRequired,
  isAdmin: propTypes.bool.isRequired,
  open: propTypes.bool.isRequired,
};

Navbar.defaultProps = {
  isAdmin: false,
};

export default Navbar;
