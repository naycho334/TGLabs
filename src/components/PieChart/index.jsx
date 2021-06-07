import { Box, Grid } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import PieChartTable from "./PieChartTable";
import Chart from "./Chart";

const PieChart = (props) => {
  const { data, noTable, noLabel, chartContent, onChangeCurrency, colors } =
    props;

  const formattedData = data
    .sort((a, b) => (a > b ? -1 : 1))
    .map((item, index) => ({ ...item, color: _.get(colors, index, "") }));

  return (
    <Grid container spacing={2} alignItems="center">
      {!noTable && (
        <Grid item xs={12} lg="auto">
          <PieChartTable data={formattedData} />
        </Grid>
      )}
      <Grid item xs={12} lg>
        <Box display="flex" justifyContent="center" height="100%">
          <Chart
            onChangeCurrency={onChangeCurrency}
            chartContent={chartContent}
            data={formattedData}
            noLabel={noLabel}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

PieChart.defaultProps = {
  chartContent: {},
  noTable: false,
  noLabel: false,
  data: [],
};

PieChart.propTypes = {
  onChangeCurrency: propTypes.func.isRequired,
  chartContent: propTypes.shape({
    amount: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    unit: propTypes.string.isRequired,
  }).isRequired,
  data: propTypes.array.isRequired,
  colors: propTypes.arrayOf(propTypes.string.isRequired),
  noTable: propTypes.bool,
  noLabel: propTypes.bool,
};

export default memo(PieChart);
