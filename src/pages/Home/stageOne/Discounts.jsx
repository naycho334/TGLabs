import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import useStyles from "../styles";
import _ from "lodash";

const Discounts = (props) => {
  const { discounts } = props;
  const classes = useStyles();

  return (
    <div className={classes.discountsContainer}>
      <div className={classes.discounts}>
        <div className={classes.line}></div>
        {discounts.map(({ discount, label }, index, { length }) => (
          <Box
            left={`${(index / length) * 100}%`}
            className={classes.discount}
            key={label}
          >
            <Typography variant="caption" component="span">
              {label}
            </Typography>
            <Typography variant="body2" component="span">
              Discount: {discount}%
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
};

Discounts.propTypes = {
  discounts: propTypes.arrayOf(
    propTypes.shape({
      discount: propTypes.number.isRequired,
      label: propTypes.string.isRequired,
    })
  ).isRequired,
};

Discounts.defaultProps = {};

export default Discounts;
