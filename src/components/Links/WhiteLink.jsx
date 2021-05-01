import { darken, Link, withStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const CustomLink = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.common.white,

      "&:hover": {
        color: darken(theme.palette.common.white, 0.1),
      },

      "&:active": {
        color: darken(theme.palette.common.white, 0.3),
      },
    },
  };
})(Link);

const WhiteLink = ({ children, ...props }) => {
  return (
    <CustomLink component={RouterLink} {...props}>
      {children}
    </CustomLink>
  );
};

export default WhiteLink;
