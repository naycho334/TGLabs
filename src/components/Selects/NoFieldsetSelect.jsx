import { InputBase, Select, withStyles } from "@material-ui/core";

const NoFieldsetSelect = withStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1.25, 3, 1.25, 1.25),
      borderRadius: theme.spacing(1),

      "& fieldset": {
        visibility: "hidden",
      },

      "&.chart": {
        fontWeight: "bold",

        "&:after, &:before": {
          display: "none",
          border: 0,
        },

        "&:hover": {
          display: "none",

          "&:before": {
            display: "none",
          },
        },
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

export const NoFieldsetSelectInput = withStyles((theme) => {
  return {
    root: {
      borderRadius: theme.spacing(1),
      overflow: "hidden",
      fontWeight: "bold",
      color: '#8f96ab',

      "&:after, &:before": {
        borderColor: 'none',
      },

      "&:hover": {
        "&:before": {
          borderColor: 'none'
        },
      },
    },
  };
})(InputBase);

export default NoFieldsetSelect;
