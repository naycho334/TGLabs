import { Box, useTheme } from "@material-ui/core";
import HelmetExport from "react-helmet";
import propTypes from "prop-types";

const Page = (props) => {
  const { title, children, hasNavbar } = props;
  const theme = useTheme();
  const paddingTop = 80 + theme.spacing(3);

  return (
    <>
      <HelmetExport>
        <title>{title}</title>
      </HelmetExport>
      <Box pt={hasNavbar ? `${paddingTop}px` : 0}>{children}</Box>
    </>
  );
};

Page.propTypes = {
  hasNavbar: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.object,
};

Page.defaultProps = {
  hasNavbar: false,
  title: "",
};

export default Page;
