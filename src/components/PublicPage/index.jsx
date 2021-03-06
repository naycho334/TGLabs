import { Box, useTheme } from "@material-ui/core";
import HelmetExport from "react-helmet";
import propTypes from "prop-types";

import CustomCSSBaseline from "./CustomCSSBaseline";
import MainNavbar from "../MainNavbar";

const PublicPage = (props) => {
  const { title, children, hasNavbar } = props;
  const theme_ = useTheme();
  const paddingTop = 80 + theme_.spacing(3);

  return (
    <>
      <CustomCSSBaseline />
      <MainNavbar />
      <div>
        <HelmetExport>
          <title>{title}</title>
        </HelmetExport>
        <Box pt={hasNavbar ? `${paddingTop}px` : 0} overflow="hidden">
          {children}
        </Box>
      </div>
    </>
  );
};

PublicPage.propTypes = {
  hasNavbar: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.any,
};

PublicPage.defaultProps = {
  hasNavbar: false,
  title: "",
};

export default PublicPage;
