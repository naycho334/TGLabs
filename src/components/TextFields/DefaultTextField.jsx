import { colors, TextField, withStyles } from "@material-ui/core";

const DefaultTextField = withStyles((theme) => {
  return {
    root: {
      marginTop: "calc(.9rem + 8px)",
      borderRadius: 4,
      
      "& input, & textarea": {
        backgroundColor: "#F8F8F8",
        fontWeight: 400,
      },

      "& > :after, & > :before": {
        visibility: "hidden",
      },
      
      "& fieldset": {
        borderColor: `${colors.grey[200]} !important`,
        top: 0,

        "& legend": {
          display: "none",
        },
      },

      "& label": {
        transform: `translate(0px, calc(-100% - ${theme.spacing(
          1
        )}px)) !important`,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: ".9rem",
      },

      "&:hover": {
        "& fieldset": {
          borderColor: `${colors.grey[300]} !important`,
        },
      },

      "& textarea:focus, & input:focus": {
        "& + fieldset": {
          borderColor: `${colors.grey[400]} !important`,
        },
      },
    },
  };
})(TextField);

export default DefaultTextField;
