import {
  IconButton,
  Toolbar,
  AppBar,
  Button,
  Badge,
  Grid,
} from "@material-ui/core";
import {
  NotificationsNoneOutlined,
  AccountCircleOutlined,
  Add,
} from "@material-ui/icons";
import propTypes from "prop-types";

import LightBlueGradientButton from "../Buttons/LightBlueGradientButton";
import useStyles from "./styles";

import { ReactComponent as SupportIcon } from "../../assets/svgs/icon_support.svg";

const Navbar = (props) => {
  const { isAdmin } = props;
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
            {!isAdmin && (
              <LightBlueGradientButton
                variant="contained"
                endIcon={<Add />}
                disableElevation
              >
                Invest
              </LightBlueGradientButton>
            )}
          </Grid>

          <Grid item>
            <Grid alignItems="center" container spacing={2}>
              {/* Support button */}
              <Grid item>
                <Button startIcon={<SupportIcon />}>Support</Button>
              </Grid>

              <Grid item>|</Grid>

              {/* Notifications */}
              <Grid item>
                <IconButton>
                  <Badge
                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                    color="secondary"
                    badgeContent={4}
                    variant="dot"
                  >
                    <NotificationsNoneOutlined />
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
                    <AccountCircleOutlined />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item>username@gmail.com</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  isAdmin: propTypes.bool.isRequired,
};

Navbar.defaultProps = {
  isAdmin: false,
};

export default Navbar;
