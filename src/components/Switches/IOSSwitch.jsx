import { Switch, withStyles } from "@material-ui/core";

const IOSSwitch = withStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    height: 26,
    padding: 0,
    width: 42,
  },
  switchBase: {
    padding: 2,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: theme.palette.lightBlue.dark,
        border: "none",
        opacity: 1,
      },
    },
    "&$focusVisible $thumb": {
      color: theme.palette.lightBlue.dark,
      border: "6px solid #fff",
    },
  },
  thumb: {
    height: 22,
    width: 22,
  },
  track: {
    transition: theme.transitions.create(["background-color", "border"]),
    border: `2px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    borderRadius: 26 / 2,
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        switchBase: classes.switchBase,
        checked: classes.checked,
        thumb: classes.thumb,
        track: classes.track,
        root: classes.root,
      }}
      {...props}
    />
  );
});

export default IOSSwitch;
