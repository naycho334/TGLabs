import { Button, withStyles } from "@material-ui/core";

const GolderGradientButton = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.golden.light,
      textTransform: "capitalize",
      transition: "all .3s",
      fontWeight: "normal",

      "&:hover":{
        backgroundColor: 'transparent'
      }
    },
  };
})(Button);

export default GolderGradientButton;
