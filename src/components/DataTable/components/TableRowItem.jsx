import { TableCell, TableRow } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

const TableRowItem = (props) => {
  const { data, components, onClick, className, index } = props;

  return (
    <TableRow
      {...(_.isFunction(onClick)
        ? { onClick: onClick.bind(null, data.id), "data-clickable": 1 }
        : {})}
      className={className}
      key={index}
    >
      {components.map(
        ({ component: Component, tableCellProps, props }, index) => (
          <TableCell key={index} {...tableCellProps}>
            {Component && (
              <Component
                {...{
                  ..._.defaultTo(props, {}),
                  ..._.defaultTo(data[index], {}),
                }}
              />
            )}
          </TableCell>
        )
      )}
    </TableRow>
  );
};

TableRowItem.propTypes = {
  components: propTypes.array.isRequired,
  index: propTypes.number.isRequired,
  data: propTypes.any.isRequired,
  onClick: propTypes.any,
};

export default memo(TableRowItem);
