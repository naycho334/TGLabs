import { Link, withStyles } from "@material-ui/core";

const GolderLink = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.golden.light,

      "&:hover": {
        color: theme.palette.golden.main,
      },
    },
  };
})(Link);

export default GolderLink;
