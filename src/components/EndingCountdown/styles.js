import { darken, makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => {
  return {
    countdownContainer: {
      marginBottom: theme.spacing(3),
      justifyContent: 'center',
      display: 'flex',

      "& .countdown": {
        position: 'relative',
        width: 'unset',

        [theme.breakpoints.down("sm")]: {
          justifyContent: 'center'
        }
      },

      "& .timeBox": {
        border: `2px solid ${theme.palette.grey.border}`,
        borderRadius: theme.spacing(1),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        minWidth: 75,
        height: 75,

        "& .value": {
          color: theme.palette.lightBlue.dark,
          padding: theme.spacing(0, 1),
          lineHeight: '2.125rem',

          "&.seconds": {
            fontWeight: 'bold'
          }
        },

        "& .label": {
          color: darken(theme.palette.grey.border, .4),
          lineHeight: '0.7rem',
          fontSize: '0.7rem',
        },
      },

      "& .countEnds": {
        color: theme.palette.orange.main,
        textAlign: 'center',

        [theme.breakpoints.up("md")]: {
          transform: 'translateX(-100%)',
          position: 'absolute',
          left: 0
        }
      },
    }
  }
})

export default styles;