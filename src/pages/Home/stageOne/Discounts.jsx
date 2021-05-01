import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
// import _ from "lodash";

const Discounts = (props) => {
  const { discounts } = props;

  return (
    <div className="discountsContainer">
      <div className="discounts">
        <div className="line"></div>
        {discounts.map(({ discount, label }, index, { length }) => (
          <Box
            left={`${(index / length) * 100}%`}
            top={`${(index / length) * 100}%`}
            className="discount"
            key={label}
          >
            <Typography variant="caption" component="span">
              {label.split(/(?=\()/).map((str) => (
                <span key={str}>{str}</span>
              ))}
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
