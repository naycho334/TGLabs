import { Select, withStyles } from "@material-ui/core";

const NoFieldsetSelect = withStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1.25, 3, 1.25, 1.25),

      "& fieldset": {
        visibility: "hidden",
      },
    },
    select: {
      paddingRight: `${theme.spacing(4)}px !important`,
    },
    icon: {
      transform: "translate(-50%, -50%)",
      height: ".75em",
      width: ".75em",
      top: "50%",
    },
  };
})(Select);

export default NoFieldsetSelect;
