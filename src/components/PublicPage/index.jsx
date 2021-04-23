import { Box, MuiThemeProvider } from "@material-ui/core";
import propTypes from "prop-types";

import CustomCSSBaseline from "./CustomCSSBaseline";
import MainNavbar from "../MainNavbar";
import theme from "./theme";

const PublicPage = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CustomCSSBaseline />
      <MainNavbar />

      <Box>{children}</Box>
    </MuiThemeProvider>
  );
};

PublicPage.propTypes = {
  children: propTypes.object.isRequired,
};

export default PublicPage;
