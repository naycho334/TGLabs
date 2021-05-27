import { FormControlLabel, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import IOSSwitch from "components/Switches/IOSSwitch";

const ReportSwitch = (props) => {
  const { checked, onChange, title, disabled } = props;

  return (
    <FormControlLabel
      control={
        <IOSSwitch checked={checked} onChange={onChange} disabled={disabled} />
      }
      labelPlacement="start"
      label={<Typography variant="caption">{title}</Typography>}
    />
  );
};

ReportSwitch.propTypes = {
  disabled: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
};

export default memo(ReportSwitch);
