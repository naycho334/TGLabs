import { colors, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tabTable: {
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    borderRadius: 15,

    "& .tabBar": {
      backgroundColor: colors.grey[100],
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      position: 'relative',
      display: 'flex',
      paddingTop: 2,

      "& .latest": {
        padding: theme.spacing(2, 4),
        color: colors.grey[600],
      },

    },

    "& .tabIndicator": {
      borderBottomColor: theme.palette.common.white,
      border: `1px solid ${colors.grey[300]}`,
      transition: 'background-color .3s',
      backgroundColor: 'transparent',
      height: '100%',
    },

    "& td": {
      "&:nth-child(1)": {
        width: 185
      },

      "&:nth-child(3)": {
        width: 190
      },

      "&:nth-child(4)": {
        width: 135
      },

      "&:nth-child(6)": {
        width: 125
      },
    },
  },
}))

export default useStyles;