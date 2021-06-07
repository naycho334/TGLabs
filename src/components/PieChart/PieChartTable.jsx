import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import { cryptoCurrency } from "lib/helpers";
import useStyles from "./styles";

const PieChartTable = (props) => {
  const { data } = props;
  const classes = useStyles();

  const style = {
    td: { display: "flex", alignItems: "center", mb: 1.5, height: 39.59 },
    last: { mb: 0 },
  };

  return (
    <table>
      <thead>
        <tr>
          <th align="left" colSpan={4}>
            <Typography variant="overline" className="grey-text">
              {_.defaultTo(data, []).length} Currencies
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {_.defaultTo(data, []).map((item, index, { length }) => {
          const { CryptoGrey } = cryptoCurrency(item.unit);
          return (
            <tr key={index}>
              <td component="td" style={{ verticalAlign: "baseline" }}>
                <Box
                  bgcolor={item.color}
                  borderRadius={13}
                  height={13}
                  width={13}
                  mr={0.75}
                  mt={0.3}
                />
              </td>
              <td>
                <Box
                  {...style.td}
                  {...(index + 1 === length ? style.last : {})}
                  flexWrap="wrap"
                >
                  <Box display="flex" width="100%" height={18} mb={0.45}>
                    <Box
                      justifyContent="flex-start"
                      alignItems="center"
                      display="flex"
                    >
                      <Box mr={1}>
                        <Typography variant="subtitle1" className="bold">
                          {item.name}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2">
                          {String(item.unit).toUpperCase()}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    alignItems="center"
                    display="flex"
                    width="100%"
                    height={16}
                  >
                    <Typography
                      style={{ whiteSpace: "nowrap" }}
                      className="grey-text"
                      variant="subtitle2"
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </td>
              <td>
                <Box
                  {...style.td}
                  {...(index + 1 === length ? style.last : {})}
                  style={{ opacity: 0.25 }}
                  justifyContent="center"
                  display="flex"
                  width={25}
                  mr={2}
                >
                  {CryptoGrey && <CryptoGrey />}
                </Box>
              </td>
              <td>
                <Box
                  {...style.td}
                  {...(index + 1 === length ? style.last : {})}
                >
                  <Typography className="purple-text bold" variant="body1">
                    {_.get(item, "data", "")}
                  </Typography>
                </Box>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

PieChartTable.defaultProps = {
  data: [],
};

PieChartTable.propTypes = {
  data: propTypes.array.isRequired,
};

export default memo(PieChartTable);
