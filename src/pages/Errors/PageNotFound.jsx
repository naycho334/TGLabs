import { Typography } from "@material-ui/core";
import HelmetExport from "react-helmet";
import { memo } from "react";

import useStyles from "./styles";

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HelmetExport>
        <title>Page not found!</title>
      </HelmetExport>
      <div>
        <Typography variant="h1">404</Typography>
        <Typography variant="h6" align="center">
          Page not found
        </Typography>
      </div>
    </div>
  );
};

export default memo(PageNotFound);
