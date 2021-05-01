import { Typography, withStyles } from "@material-ui/core";

const LightBlueTypography = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.lightBlue.main,
      marginBottom: theme.spacing(3),

      "&.normal": {
        fontWeight: 300,
      },

      "&.underline": {
        marginBottom: theme.spacing(6),

        "&:after": {
          background: `linear-gradient(90deg, ${theme.palette.yellow.light}, transparent)`,
          marginTop: theme.spacing(1.25),
          position: "absolute",
          display: "block",
          borderRadius: 5,
          content: '""',
          width: 70,
          height: 5,
        },
      },

      "&.underlineCenter": {
        "&:after": {
          transform: "translate(-50%, 0)",
          left: "50%",
        },
      },

      [theme.breakpoints.down("sm")]: {
        "&.smallCenter": {
          textAlign: "center",
          "&:after": {
            transform: "translate(-50%, 0)",
            left: "50%",
          },
        },
      },
    },
  };
})(Typography);

export default LightBlueTypography;
