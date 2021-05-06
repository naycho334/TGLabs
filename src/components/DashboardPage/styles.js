import { colors, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  const SIDEBAR_WIDTH = 250;
  const MENU_OFFSET = 3;

  return {
    "@global": {
      "body": {
        backgroundColor: '#FEFAED',

        [theme.breakpoints.down("sm")]: {
          backgroundColor: theme.palette.common.white
        }
      }
    },
    navbar: {
      borderBottom: `1px solid ${colors.grey[300]}`,
      width: '100%',
      flex: 1,

      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.palette.common.white
      }
    },
    seperator: {
      backgroundColor: colors.grey[300],
      height: 30,
      width: 1,
    },
    drawer: {
      minHeight: theme.spacing(10),

      "&.sidebar": {
        padding: theme.spacing(0, MENU_OFFSET)
      },

      [theme.breakpoints.down("sm")]: {
        minHeight: theme.spacing(8),
      },
    },
    sidebar: {
      zIndex: theme.zIndex.appBar,
      width: SIDEBAR_WIDTH,
      flexShrink: 0,


      "& .appBar": {
        borderBottom: `1px solid ${colors.grey[300]}`,

        "& .appLogo": {
          width: 150,

          "& #Group_2051 path": {
            fill: theme.palette.purple.light1
          }
        },
      },

      "& .scrollbar-container": {
        flexDirection: 'column',
        display: 'flex',

        [theme.breakpoints.down("sm")]: {
          backgroundColor: '#FEFAED',
        }
      },

      "& .MuiDrawer-paper": {
        boxShadow: '3px 0 17px -3px #0000000f',
        width: SIDEBAR_WIDTH,
        borderRight: 0,
      },

      "& .footer": {
        padding: theme.spacing(MENU_OFFSET),
        marginTop: 'auto',

        "& svg": {
          marginRight: theme.spacing(2),
          height: 22,
          width: 22,

          "& *": {
            fill: 'silver'
          },
        },

        "& .d-flex": {
          display: 'flex'
        },

        "& .mb-3": {
          marginBottom: theme.spacing(2),
        },
      },

      [theme.breakpoints.down("sm")]: {
        "& .sidebar": {
          display: 'none'
        },

        "& .MuiBackdrop-root": {
          display: 'none'
        },

        "& .MuiDrawer-paper": {
          // boxShadow: 'none',
          width: '100%',
        },

        "&, & .MuiBackdrop-root, & .MuiDrawer-paper": {
          height: `calc( 100vh - ${theme.spacing(8)}px )`,
          top: `${theme.spacing(8)}px !important`,
        },
      }
    },
    content: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
    list: {
      "& .subheader": {
        padding: theme.spacing(4, 0, 1.25, MENU_OFFSET),
        textTransform: 'uppercase',
        color: colors.grey[400],
        position: 'static',
        fontWeight: 'bold',
        fontSize: '.9rem',
        lineHeight: 0,
      },

      "& .MuiListItemIcon-root": {
        marginRight: theme.spacing(1)
      },

      "& .MuiListItem-button": {
        padding: theme.spacing(1, MENU_OFFSET),

        "&.active": {
          "& .title span": {
            color: theme.palette.purple.light1,
          },
          "& svg *": {
            stroke: theme.palette.purple.light1
          },
        },
      },

      "& .title span": {
        color: 'rgb(143, 150, 165)',
        fontSize: '.97rem',
        fontWeight: 500,
      },

      "& .MuiDivider-root": {
        backgroundColor: colors.grey[200],
        margin: theme.spacing(0, MENU_OFFSET),
      },
    },
    referFriend: {
      backgroundColor: theme.palette.purple.light,
      padding: theme.spacing(2, MENU_OFFSET),
      overflow: 'hidden',
      flex: 'none',

      "& p": {
        fontSize: '.9rem',

        [theme.breakpoints.down("sm")]: {
          textAlign: 'center',
          margin: 'auto',
          maxWidth: 132,
        }
      },

      "& img": {
        margin: theme.spacing(-7, -4, -12.5, -9),
        userSelect: 'none',
        height: 260,

        [theme.breakpoints.down("sm")]: {
          margin: theme.spacing(-13, -4, -18, -6),
          height: 340,
        }
      },

      "& button": {
        border: `1px solid ${theme.palette.lightBlue.dark}`,
        color: theme.palette.common.white,
        padding: theme.spacing(1, 3),
        textTransform: 'capitalize',
        fontWeight: 'normal',
        borderRadius: 30,
        display: 'block',
        margin: 'auto'
      },
    }
  }
});

export default useStyles;