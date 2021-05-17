import { Box, Hidden, useTheme } from "@material-ui/core";
import PerfectScrollbars from "react-perfect-scrollbar";
import { memo, useState } from "react";
import propTypes from "prop-types";

import DashboardContext from "./context";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardPage = (props) => {
  const [open, setOpen] = useState(false);
  const { isAdmin, children } = props;
  const theme = useTheme();

  return (
    <DashboardContext.Provider value={{ isAdmin }}>
      <Box display="flex">
        {/* Sidebar */}
        <Hidden smDown>
          <Sidebar />
        </Hidden>
        <Hidden mdUp>
          <Sidebar
            onClose={() => setOpen(false)}
            variant="temporary"
            open={open}
          />
        </Hidden>

        {/* Body */}
        <Box flex={1}>
          {/* Navbar */}
          <Navbar openSidebar={setOpen} isAdmin={isAdmin} open={open} />

          {/* Body */}
          <Box height={`calc(100vh - ${theme.spacing(9)}px)`}>
            <PerfectScrollbars>{children}</PerfectScrollbars>
          </Box>
        </Box>
      </Box>
    </DashboardContext.Provider>
  );
};

DashboardPage.propTypes = {
  isAdmin: propTypes.bool.isRequired,
  children: propTypes.any.isRequired,
};

DashboardPage.defaultProps = {
  isAdmin: false,
};

export default memo(DashboardPage);
