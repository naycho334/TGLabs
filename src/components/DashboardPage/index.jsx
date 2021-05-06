import { Box, Container, useTheme } from "@material-ui/core";
import PerfectScrollbars from "react-perfect-scrollbar";
import propTypes from "prop-types";

import useStyles from "./styles";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardPage = (props) => {
  const { isAdmin, children } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar isAdmin={isAdmin} />

      {/* Body */}
      <Box flex={1}>
        {/* Navbar */}
        <Navbar isAdmin={isAdmin} />

        {/* Body */}
        <Box height={`calc(100vh - ${theme.spacing(9)}px)`}>
          <PerfectScrollbars>
            <Container maxWidth={false} className={classes.content}>
              {children}
            </Container>
          </PerfectScrollbars>
        </Box>
      </Box>
    </Box>
  );
};

DashboardPage.propTypes = {
  isAdmin: propTypes.bool.isRequired,
  children: propTypes.any.isRequired,
};

DashboardPage.defaultProps = {
  isAdmin: false,
};

export default DashboardPage;
