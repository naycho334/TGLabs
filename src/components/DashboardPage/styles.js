import { colors, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  const SIDEBAR_WIDTH = 250;
  const MENU_OFFSET = 3;

  return {
    "@global": {
      "body": {
        backgroundColor: '#FEFAED',
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
    notifications: {
      border: `1px solid ${theme.palette.lightBlue.dark}`,
      maxWidth: `${400}px !important`,
      borderRadius: 0,
      width: '100%',

      "& .header": {
        padding: theme.spacing(2, 2),
        color: '#8F96A5',

        "& .badge": {
          borderRadius: theme.spacing(1),
          marginLeft: theme.spacing(2),
          border: `1px solid #8F96A5`,
          padding: theme.spacing(.5),
        },
      },

      "& .content": {
        padding: theme.spacing(2),
        height: 400,
      },

      "& .footer": {
        "& button": {
          paddingBottom: theme.spacing(1.5),
          color: theme.palette.orange.main,
          paddingTop: theme.spacing(1.5),
          fontWeight: 'bold',
        },
      },
    },
    notification:{
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1.5),
      border: `1.5px solid`,
      
      "&.default":{
        backgroundColor: colors.grey[50],
        borderColor: colors.grey[800],
      },
      
      "&.danger":{
        backgroundColor: colors.red[50],
        borderColor: colors.red[800],
      },
      
      "&.info":{
        backgroundColor: colors.lightBlue[50],
        borderColor: colors.lightBlue[800],
      },
      
      "&.warning":{
        backgroundColor: colors.orange[50],
        borderColor: colors.orange[800],
      },
      
      "& .separator":{
        margin: theme.spacing(1, 0)
      },
      
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

        "& .links": {
          justifyContent: 'space-between',
          position: 'relative',

          "& a:nth-child(1)": {
            paddingRight: theme.spacing(3)
          },

          "&:after": {
            backgroundColor: colors.grey[300],
            position: 'absolute',
            height: '100%',
            content: '""',
            left: '50%',
            width: 1,
            top: 0,
          },
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
          boxShadow: 'none',
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
      paddingTop: theme.spacing(3),

      "& .page-title": {
        color: colors.grey[600],
        fontSize: 24
      },

      "& .fixedIcon": {
        transform: `scale(10) translateX(50%)`,
        position: 'absolute',
        opacity: .08,
        zIndex: -1,
        left: 220,
        top: -5,
      },

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