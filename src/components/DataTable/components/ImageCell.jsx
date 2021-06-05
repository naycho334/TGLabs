import { Box } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const ImageCell = (props) => {
  const { className, value, ...props_ } = props;
  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.image, className)}
      component="img"
      src={value}
      {...props_}
    />
  );
};

ImageCell.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  className: propTypes.string,
};

export default memo(ImageCell);
