import { colors, fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    navbar: {
      backgroundColor: fade(theme.palette.purple.main, .8),
      height: 80
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
      borderRadius: 5,
      content: '""',
      height: 1,
      bottom: 10
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
    }
  }
})

export default useStyles;