import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    header: {
      justifyContent: 'space-between',
      minHeight: theme.spacing(5),
    },
    separator: {
      margin: theme.spacing(2, -3, .5, -3),

      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3)
      }
    }
  }
});

export default useStyles;