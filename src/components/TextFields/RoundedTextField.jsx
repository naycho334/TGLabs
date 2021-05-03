import { fade, TextField, withStyles } from "@material-ui/core";

const RoundedTextField = withStyles((theme) => {
  return {
    root: {
      backgroundColor: fade(theme.palette.common.white, 0.1),
      borderRadius: 25,

      "&.whiteText": {
        "& input, & textarea": {
          color: theme.palette.common.white,
        },
      },

      "& > :after, & > :before": {
        visibility: "hidden",
      },

      "& input, & textarea": {
        padding: theme.spacing(1.5, 2),
        fontSize: ".95rem",
      },

      "&.noBorderRight": {
        marginRight: theme.spacing(-1.5),
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  };
})(TextField);

export default RoundedTextField;
