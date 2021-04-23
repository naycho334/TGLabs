import { Button, withStyles } from "@material-ui/core";

const GolderGradientContainedButton = withStyles((theme) => {
  return {
    root: {
      background: `linear-gradient(90deg, ${theme.palette.golden.main}, ${theme.palette.golden.light})`,
      color: theme.palette.purple.main,
      padding: theme.spacing(1, 2.5),
      textTransform: "capitalize",
      backgroundSize: "100%",
      textDecoration: 'none',
      transition: "all .3s",
      fontWeight: "normal",
      borderRadius: 20,
    },
  };
})(Button);

export default GolderGradientContainedButton;
