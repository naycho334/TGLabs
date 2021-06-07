import { colors, createMuiTheme, lighten } from "@material-ui/core";

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
        "&.blue-text": {
          color: '#138BBD',
        },
        "&.grey-text": {
          color: colors.grey[400]
        },
        "&.dark-grey-text": {
          color: colors.grey[500]
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
        },
        "&.black-text": {
          color: "#000"
        },
        "&.bold": {
          fontWeight: 'bold',
        },
        "&.rounded-1": {
          borderRadius: theme.spacing(1)
        },
        "&.rounded": {
          borderRadius: theme.spacing(5)
        },
        "&.purple-text": {
          color: "#6B24D6",
        },
        "&.capitalize": {
          textTransform: 'capitalize'
        },
        "&.orange-text": {
          color: "#F48A5B",
        }
      },
      contained: {
        "&.purple-bg": {
          backgroundColor: "#6B24D6",

          "&:hover": {
            backgroundColor: lighten("#6B24D6", .1),
          },

          "&:disabled": {
            backgroundColor: colors.grey[300],
          },
        },

        "&.orange-bg": {
          backgroundColor: "#F48A5B",

          "&:hover": {
            backgroundColor: lighten("#F48A5B", .1),
          },

          "&:disabled": {
            backgroundColor: colors.grey[300],
          },
        },

      },
      outlined: {
        "&.purple-border": {
          borderColor: "#6B24D6"
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36
      }
    },
    MuiBadge: {
      badge: {
        backgroundColor: '#138BBD',

        "&.notification": {
          border: `2px solid #138BBD`,
          backgroundColor: 'unset',
        }
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