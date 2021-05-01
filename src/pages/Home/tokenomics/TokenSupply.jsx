import { Box, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import _ from "lodash";

const data = [
  { label: "Held by Team", value: 20 },
  { label: "Public Purchase", value: 80 },
];

const TokenSupply = () => {
  return (
    <div className="percentageLine">
      <Box display="flex" className="bar">
        {data.map(({ value }) => (
          <div style={{ width: `${value}%` }} key={value}></div>
        ))}
      </Box>
      <Box display="flex" position="relative" mt={1}>
        {data.map(({ label, value }, i, array) => (
          <Grid
            style={{
              left: `calc(${_.get(array, [i - 1, "value"], 0)}% + ${i * 20}px)`,
            }}
            className="value"
            spacing={0}
            container
            key={i}
          >
            <Grid item xs={12}>
              <Typography
                className={clsx("white-text", i === 1 ? "bold" : "normal")}
                variant="h5"
              >
                {value}%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="normal grey-text" variant="caption">
                {label}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default TokenSupply;
