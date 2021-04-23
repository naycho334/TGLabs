import { withStyles } from "@material-ui/core/styles";

import Texture from "../../assets/svgs/background_texture-one.svg";

const styles = theme => ({
  "@global": {
    "body": {
      backgroundColor: theme.palette.purple.main,
      backgroundImage: `url(${Texture})`,
      backgroundSize: '102px 19px',
    }
  }
});

const CustomCSSBaseline = () => null;

export default withStyles(styles)(CustomCSSBaseline);
