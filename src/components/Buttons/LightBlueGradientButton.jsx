import { Button, withStyles } from "@material-ui/core";

const LightBlueGradientButton = withStyles((theme) => {
  return {
    root: {},
    contained: {
      background: `linear-gradient(90deg, ${theme.palette.lightBlue.main}, ${theme.palette.lightBlue.dark})`,
      color: theme.palette.purple.main,
      padding: theme.spacing(1, 2.5),
      textTransform: "capitalize",
      backgroundSize: "100%",
      textDecoration: "none",
      transition: "all .3s",
      fontWeight: "normal",
      borderRadius: 20,

      "&.reverse": {
        background: `linear-gradient(-90deg, ${theme.palette.lightBlue.main}, ${theme.palette.lightBlue.dark})`,
      },
    },
  };
})(Button);

export default LightBlueGradientButton;
