import { Checkbox } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import { CheckBoxFullIcon } from "components/Icons/Icons";
import useStyles from "components/DataTable/styles";

const CheckBoxCell = (props) => {
  const { value, id, onChange, className, disabled } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.checkBox, className)}>
      <Checkbox
        checkedIcon={<CheckBoxFullIcon className={clsx(value && "checked")} />}
        onChange={() => onChange(id)}
        icon={<CheckBoxFullIcon />}
        disabled={disabled}
        checked={value}
      />
    </div>
  );
};

CheckBoxCell.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.bool.isRequired,
  className: propTypes.string,
};

export default memo(CheckBoxCell);
