import { Card, withStyles } from "@material-ui/core";

const CustomCard = withStyles((theme) => {
  return {
    root: {
      height: "100%",

      "& > div": {
        height: "100%",

        "& > div": {
          height: "100%",
        },
      },

      "& .MuiDivider-root": {
        "&.footer": {
          margin: theme.spacing(3, 0),
        },
        "&.my": {
          margin: theme.spacing(1.5, 0),
        },
      },

      "& .section-title": {
        color: "#8F96A5",
        fontSize: 20,
      },

      "& .sub-section-title": {
        color: "#BDC3D0",
      },

      "& > *": {
        color: "#5F6777",
      },
    },
  };
})(Card);

export default CustomCard;
