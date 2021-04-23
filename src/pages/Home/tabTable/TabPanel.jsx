import { Box, Typography } from "@material-ui/core";
import { memo } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} role="tabpanel" {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default memo(TabPanel);
