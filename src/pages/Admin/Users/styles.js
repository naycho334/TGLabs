import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    allUsers: {

      "& svg.lockiIcon": {
        "&.unconfirmed": {
          display: 'none'
        },

        "&.blocked *": {
          "&:not(circle)": {
            stroke: theme.palette.lightBlue.dark
          },

          "& circle": {
            fill: theme.palette.lightBlue.dark
          },
        },
      }
    }
  }
});

export default useStyles;