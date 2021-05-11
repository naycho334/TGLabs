import { darken, fade, withStyles } from "@material-ui/core/styles";

import Texture from "assets/svgs/background_texture-one.svg";

const styles = theme => {

  return ({
    "@global": {
      body: {
        backgroundColor: theme.palette.purple.main,
        backgroundImage: `url(${Texture})`,
        backgroundSize: '102px 19px',
      },
      ".globalScrollbar > .ps__rail-x:hover, .globalScrollbar > .ps__rail-y:hover": {
        backgroundColor: fade(theme.palette.common.white, .1)
      },
      ".globalScrollbar > .ps__rail-x.ps--clicking, .globalScrollbar > .ps__rail-y.ps--clicking": {
        backgroundColor: fade(theme.palette.common.white, .1)
      },
      ".globalScrollbar > .ps__rail-x .ps__thumb-x, .globalScrollbar > .ps__rail-y .ps__thumb-y": {
        backgroundColor: darken(theme.palette.purple.main, .5)
      },
    }
  })
};

const CustomCSSBaseline = () => null;

export default withStyles(styles)(CustomCSSBaseline);
