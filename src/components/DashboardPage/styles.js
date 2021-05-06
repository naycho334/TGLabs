import { colors, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  const SIDEBAR_WIDTH = 250;

  return {
    "@global": {
      "body": {
        backgroundColor: '#FEFAED'
      }
    },
    navbar: {
      borderBottom: `1px solid ${colors.grey[300]}`,
      width: '100%',
      flex: 1,
    },
    drawer: {
      minHeight: theme.spacing(10),

      "&.sidebar": {
        padding: theme.spacing(0, 2)
      }
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

      "& .MuiDrawer-paper": {
        width: SIDEBAR_WIDTH,
        borderRight: 0,

        boxShadow: '3px 0 17px -3px #0000000f',
      }
    },
    content: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
    list: {
      "& .subheader": {
        textTransform: 'uppercase',
        color: colors.grey[400],
        position: 'static',
        fontWeight: 'bold',
        fontSize: '.9rem'
      },

      "& .MuiListItemIcon-root": {
        marginRight: theme.spacing(1)
      },

      "& .MuiListItem-button": {
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
        margin: theme.spacing(0, 2),
      },
    },
    referFriend: {
      backgroundColor: theme.palette.purple.light,
      padding: theme.spacing(2, 2),
      overflow: 'hidden',

      "& img": {
        margin: theme.spacing(-7, -4, -12.5, -9),
        userSelect: 'none',
        height: 260,
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