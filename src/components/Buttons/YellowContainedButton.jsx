import { Button, withStyles } from "@material-ui/core";

const YellowContainedButton = withStyles((theme) => {
  return {
    contained: {
      backgroundColor: theme.palette.yellow.light,
      color: theme.palette.purple.light,
      padding: theme.spacing(0.75, 3),
      fontWeight: "normal",
      borderRadius: 20,
    },
  };
})(Button);

export default YellowContainedButton;
