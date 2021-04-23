import { Button, colors, withStyles } from "@material-ui/core";

const LightBlueOutlinedButton = withStyles((theme) => {
  return {
    root: {
      border: `1px solid ${theme.palette.lightBlue.main}`,
      padding: theme.spacing(1, 2.5),
      textTransform: "capitalize",
      color: colors.common.white,
      backgroundSize: "100%",
      textDecoration: "none",
      transition: "all .3s",
      fontWeight: "normal",
      borderRadius: 20,

      "&.long": {
        borderColor: theme.palette.lightBlue.dark,
        marginLeft: theme.spacing(-2),
        padding: theme.spacing(0.9, 5),
        borderLeft: "transparent",
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        position: "relative",
        paddingLeft: 35,
      },
    },
  };
})(Button);

export default LightBlueOutlinedButton;
