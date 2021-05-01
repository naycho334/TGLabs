import {
  Typography,
  withStyles,
  Drawer,
  fade,
  Grid,
  Box,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { HashLink } from "react-router-hash-link";
import propTypes from "prop-types";
// import _ from "lodash";

import WhiteLink from "../Links/WhiteLink";
import useStyles from "./styles";

import LightBlueTypography from "../Typography/LightBlueTypography";
import GolderGradientButton from "../Buttons/GolderGradientButton";

import Texture from "../../assets/svgs/background_texture-one.svg";
import TGLab2BlurredLogo from "../../assets/pngs/thlab2.png";

const CustomDrawer = withStyles((theme) => {
  return {
    root: {
      "& .MuiBackdrop-root": {
        backgroundColor: "transparent",
        top: 80,
      },
    },
    paper: {
      borderTop: `1px solid ${fade(theme.palette.common.white, 0.2)}`,
      backgroundColor: theme.palette.purple.main,
      backgroundImage: `url(${Texture})`,
      height: `calc( 100vh - 80px )`,
      backgroundSize: "102px 19px",
      overflow: "hidden",
      width: "100%",
      top: 80,
    },
    modal: {
      top: `80px !important`,
    },
  };
})(Drawer);

const SideMenu = (props) => {
  const { title, links, open, onClose } = props;
  const classes = useStyles();

  return (
    <CustomDrawer
      className={classes.sideMenu}
      onClose={onClose}
      elevation={0}
      anchor="left"
      open={open}
    >
      {/* Links */}
      <PerfectScrollbar>
        <Box py={4} px={3} flex={1}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography className="grey-text uppercase" variant="body2">
                {title}
              </Typography>
            </Grid>
            {links.map(({ title, path }) => (
              <Grid item xs={12} key={path}>
                <WhiteLink onClick={onClose} component={HashLink} to={path}>
                  <Typography variant="body2" className="bold">
                    {title}
                  </Typography>
                </WhiteLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </PerfectScrollbar>

      {/* Buy / eMail */}
      <Box className="footer" px={3} pt={1} pb={3}>
        <img src={TGLab2BlurredLogo} alt="TGLab2BlurredLogo" />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GolderGradientButton variant="contained">
              Buy Token
            </GolderGradientButton>
          </Grid>
          <Grid item xs={12}>
            <LightBlueTypography component="span">
              support@tglab.io
            </LightBlueTypography>
          </Grid>
        </Grid>
      </Box>
    </CustomDrawer>
  );
};

SideMenu.propTypes = {
  title: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  links: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      path: propTypes.string.isRequired,
    })
  ).isRequired,
};

SideMenu.defaultProps = {
  open: false,
};

export default SideMenu;
