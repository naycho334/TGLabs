import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

const Table = (props) => {
  const { tableHead, data, components } = props;

  return (
    <PerfectScrollbar style={{ maxHeight: 300 }}>
      <MuiTable stickyHeader size="small">
        <TableHead>
          <TableRow>
            {tableHead.map(({ label }, index) => (
              <TableCell key={index}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {_.defaultTo(data, []).map((data, index) => (
            <TableRow key={index}>
              {components.map(
                ({ component: Component, tableCellProps, props }, index) => (
                  <TableCell key={index} {...tableCellProps}>
                    <Component
                      {...{
                        ..._.defaultTo(props, {}),
                        ..._.defaultTo(data[index], {}),
                      }}
                    />
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </PerfectScrollbar>
  );
};

Table.propTypes = {
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes,
      props: propTypes.object,
    })
  ).isRequired,
  tableHead: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      props: propTypes.object,
    })
  ).isRequired,
  data: propTypes.object.isRequired,
};

export default memo(Table);
