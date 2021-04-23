import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import TabPanel from "./tabTable/TabPanel";
import { memo, useState } from "react";

import useStyles from "./styles";

const tables = [
  { label: "Purchases", Component: null },
  { label: "Withdrawals", Component: null },
];

const TabTable = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box className={classes.tabTable} mb={7}>
      <Box display="flex">
        <Typography className="normal" variant="caption">
          Latest
        </Typography>
        <Tabs onChange={handleChange} value={value}>
          {tables.map(({ label }) => (
            <Tab className="capitalize" label={label} key={label} />
          ))}
        </Tabs>
      </Box>
      {tables.map(({ Component }, index) => (
        <TabPanel id={`tabTable-${index}`} value={value} index={index}>
          Item One
        </TabPanel>
      ))}
    </Box>
  );
};

export default memo(TabTable);
