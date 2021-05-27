import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  Checkbox,
  TableRow,
  Box,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

import { CheckBoxFullIcon } from "components/Icons/Icons";
import useStyles from "./styles";

const Table = (props) => {
  const { tableHead, data, components } = props;
  const classes = useStyles();

  return (
    <PerfectScrollbar style={{ maxHeight: 300 }}>
      <MuiTable stickyHeader size="small">
        <TableHead>
          <TableRow>
            {tableHead.map(({ label, checkbox, checkBoxProps }, index) => (
              <TableCell
                padding={checkbox ? "checkbox" : "default"}
                key={index}
              >
                {checkbox ? (
                  <Box
                    className={classes.checkBox}
                    alignItems="center"
                    display="flex"
                  >
                    <span className="checkboxLabel">{label}</span>
                    <Checkbox
                      checkedIcon={
                        <CheckBoxFullIcon
                          className={clsx(
                            _.get(checkBoxProps, "checked", false) && "checked"
                          )}
                        />
                      }
                      icon={<CheckBoxFullIcon />}
                      {..._.defaultTo(checkBoxProps, {})}
                    />
                  </Box>
                ) : (
                  label
                )}
              </TableCell>
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
  data: propTypes.any.isRequired,
};

export default memo(Table);
