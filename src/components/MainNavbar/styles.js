import { colors, fade, makeStyles } from "@material-ui/core";

import Texture from "assets/svgs/background_texture-one.svg";

const useStyles = makeStyles(theme => {
  return {
    navbar: {
      backgroundColor: fade(theme.palette.purple.main, .8),
      backgroundImage: `url(${Texture})`,
      backgroundSize: '102px 19px',
      transition: 'all .3s',
      height: 80,

      "&.sidemenu": {
        backgroundColor: theme.palette.purple.main,
      },

      "& .navButton": {
        color: theme.palette.golden.main,

        "& svg":{
          height: '1em',
          width: '1em',

          "&.close":{
            transform: 'scale(1.2)',
            fontSize: '1.5rem',
          }
        }
      },
    },
    logo: {
      maxHeight: 50,
      maxWidth: 150,
    },
    links: {
      position: 'relative',
    },
    indicator: {
      backgroundColor: theme.palette.golden.light,
      transform: 'scaleX(.45)',
      transition: 'all .3s',
      position: 'absolute',
      visibility: 'hidden',
      borderRadius: 5,
      content: '""',
      minWidth: 30,
      bottom: 10,
      opacity: 0,
      height: 1,

      "&.active": {
        visibility: 'visible',
        opacity: 1
      }
    },
    link: {
      color: colors.common.white,
      textDecoration: 'none',
      transition: 'all .3s',

      "&.active": {
        color: theme.palette.golden.light
      }
    },
    profile: {
      color: theme.palette.golden.main
    },
    hideOnSmallScreens: {
      [theme.breakpoints.down("md")]: {
        display: 'none'
      }
    },
    showOnSmallScreens: {
      [theme.breakpoints.up("lg")]: {
        display: 'none',
      }
    },
    sideMenu: {
      "& .footer": {
        "& img": {
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          left: 230,
        }
      }
    }
  }
})

export default useStyles;