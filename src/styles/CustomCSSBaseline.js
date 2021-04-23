import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    // "html, body, #root": {
    //   overflow: 'hidden',
    //   height: '100vh',
    // }
  }
});

const CustomCSSBaseline = () => null;

export default withStyles(styles)(CustomCSSBaseline);
