import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    expression: {
      marginBottom: theme.spacing(10),
      paddinTop: theme.spacing(5),
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 900,

      "& .message": {
        position: 'relative',
        height: '100%',

        "& button": {
          bottom: theme.spacing(1),
          right: theme.spacing(1),
          position: 'absolute',
        }
      }
    },
  }
});

export default useStyles;