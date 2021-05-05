import { colors, createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme();

const mainTheme = createMuiTheme({

  palette: {

    golden: {
      main: '#FFB993',
      light: '#FEECA8',
    },
    purple: {
      main: "#2E1C89",
      light: "#6B24D6",
      light1: "#6D51F3",
      light2: '#6758EA'
    },
    lightBlue: {
      main: '#2AF6FF',
      dark: '#138BBD',
      light: '#F2FFFF'
    },
    orange: {
      main: '#F48A5B',
      light: '#FFB993',
    },
    grey: {
      border: "#BDC3D0",
    },
    yellow: {
      light: "#FEECA8",
      light1: "#FFFAEB",
    },
    // background: {
    //   default: "#222222"
    // },
  },
  overrides: {
    MuiLink: {
      root: {
        "&, & > *": {
          textDecoration: 'none'
        },
      }
    },
    MuiSelect: {
      root: {
        fontSize: '0.875rem',
        alignItems: 'center',
        display: 'flex',
      }
    },
    MuiTypography: {
      root: {
        "&.white-text": {
          color: theme.palette.common.white
        },
        "&.grey-text": {
          color: colors.grey[400]
        },
        "&.purple-text": {
          color: "#6B24D6"
        },
        "&.yellow-text": {
          color: "#FEECA8"
        },
        "&.normal": {
          fontWeight: 'normal'
        },
        "&.bold": {
          fontWeight: 'bold'
        },
        "&.uppercase": {
          textTransform: 'uppercase'
        },
        "&.mb-3": {
          marginBottom: theme.spacing(3)
        },
        "& .orange": {
          color: "#FFB993"
        },
      }
    },
    MuiButton: {
      root: {
        "&.white-text": {
          color: "#FFF"
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36
      }
    },
    MuiTab: {
      root: {
        "&.capitalize": {
          textTransform: 'capitalize'
        },
        "&.statistics": {
          backgroundColor: 'transparent',
          fontWeight: 'bold',

          "&.Mui-selected": {
            backgroundColor: theme.palette.common.white,
            color: '#138BBD'
          }
        },
      },
    }
  }
});

export default mainTheme;