import { MenuItem, Typography } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { PieChart, Pie, Cell } from "recharts";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import { NoFieldsetSelectInput } from "components/Selects/NoFieldsetSelect";
import NoFieldsetSelect from "components/Selects/NoFieldsetSelect";
import useStyles from "./styles";

const Chart = (props) => {
  const { data, noLabel, onChangeCurrency, chartContent } = props;

  const classes = useStyles();

  const renderCustomizedLabel = (params) => {
    const props = ["x", "y", "fill", "textAnchor"]
      .map((key) => ({ [key]: params[key] }))
      .reduce((p, n) => ({ ...p, ...n }), {});
    const percentage = (params.percent * 100).toFixed(0);

    return <text {...props} fontWeight="bold">{`${percentage}%`}</text>;
  };

  return (
    <div className={classes.chartContainer}>
      <PieChart width={300} height={300}>
        <Pie
          isAnimationActive={true}
          legendType="circle"
          cornerRadius={30}
          paddingAngle={-10}
          labelLine={false}
          outerRadius={110}
          innerRadius={90}
          startAngle={0}
          endAngle={360}
          dataKey="value"
          stroke="none"
          data={data}
          cx="50%"
          cy="50%"
          {...(noLabel ? {} : { label: renderCustomizedLabel })}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Pie
          data={Array(35).fill({ name: "", value: 1 })}
          innerRadius={77}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          fill="silver"
          cx="50%"
          cy="50%"
        />
      </PieChart>

      <div className={classes.chartContent}>
        <div>
          <Typography variant="overline" className="chartLabel grey-text">
            {_.get(chartContent, "label", "")}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" className="chartAmount">
            {_.get(chartContent, "amount", "")}
          </Typography>
        </div>
        <div>
          <NoFieldsetSelect
            value={_.get(chartContent, "unit", "usd")}
            input={<NoFieldsetSelectInput />}
            IconComponent={KeyboardArrowDown}
            id="currencies-list"
            className="chart"
            {...(_.isFunction(onChangeCurrency)
              ? { onChange: onChangeCurrency }
              : {})}
          >
            <MenuItem dense value="usd">
              USD
            </MenuItem>
            <MenuItem dense value="eur">
              EUR
            </MenuItem>
          </NoFieldsetSelect>
        </div>
      </div>
    </div>
  );
};

Chart.defaultProps = {
  chartContent: {},
  noLabel: false,
  data: [],
};

Chart.propTypes = {
  onChangeCurrency: propTypes.func.isRequired,
  chartContent: propTypes.shape({
    amount: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    unit: propTypes.string.isRequired,
  }).isRequired,
  data: propTypes.array.isRequired,
  noLabel: propTypes.bool,
};

export default memo(Chart);
