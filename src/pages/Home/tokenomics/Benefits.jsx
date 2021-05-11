import { RadioButtonUncheckedOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import propTypes from "prop-types";

import LightBlueTypography from "components/Typography/LightBlueTypography";

const Benefits = (props) => {
  const { title, benefits, conditions } = props;

  return (
    <div>
      <LightBlueTypography component="div">
        <Typography className="normal" variant="subtitle2">
          Benefits
        </Typography>
        <Typography className="normal" variant="h5">
          {title}
        </Typography>
      </LightBlueTypography>

      <ul className="benefits">
        {benefits.map((text) => (
          <Typography
            className="white-text normal"
            variant="subtitle2"
            component="li"
            gutterBottom
            key={text}
          >
            <RadioButtonUncheckedOutlined />
            <span>{text}</span>
          </Typography>
        ))}
      </ul>

      <ul className="conditions">
        {conditions.map((text) => (
          <Typography
            className="normal grey-text"
            variant="caption"
            component="li"
            gutterBottom
            key={text}
          >
            {text}
          </Typography>
        ))}
      </ul>
    </div>
  );
};

Benefits.propTypes = {
  benefits: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  conditions: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  title: propTypes.string.isRequired,
};

export default Benefits;
