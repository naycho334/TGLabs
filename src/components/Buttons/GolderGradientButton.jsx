import { Button, withStyles } from "@material-ui/core";

const GolderGradientButton = withStyles((theme) => {
  return {
    contained: {
      background: `linear-gradient(90deg, ${theme.palette.golden.main}, ${theme.palette.golden.light})`,
      color: theme.palette.purple.main,
      padding: theme.spacing(1, 2.5),
      textTransform: "capitalize",
      backgroundSize: "100%",
      textDecoration: "none",
      transition: "all .3s",
      fontWeight: "normal",
      whiteSpace: "nowrap",
      borderRadius: 20,

      "&.reverse": {
        background: `linear-gradient(90deg, ${theme.palette.golden.light}, ${theme.palette.golden.main})`,
      },

      "&.uppercase": {
        textTransform: "uppercase",
      },
    },
  };
})(Button);

export default GolderGradientButton;
