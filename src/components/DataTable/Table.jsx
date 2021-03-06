import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  Checkbox,
  TableRow,
  Box,
  Grid,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

import { CheckBoxFullIcon } from "components/Icons/Icons";
import TableRowItem from "./components/TableRowItem";
import useStyles from "./styles";
import { Fragment } from "react";

const Table = (props) => {
  const { tableHead, data, components, onClick } = props;
  const classes = useStyles();

  return (
    <PerfectScrollbar style={{ maxHeight: 300 }}>
      <MuiTable className={classes.table} stickyHeader size="small">
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
        {_.defaultTo(data, []).map((item, index) => (
          <Fragment key={index}>
            {_.has(item, "expand") ? (
              (() => {
                const open = _.get(data, [index, "expand", "open"], false);

                return (
                  <TableBody className={clsx(open && "expandTable")}>
                    <TableRowItem
                      components={components}
                      onClick={onClick}
                      index={index}
                      data={item}
                    />
                    <TableRow>
                      <TableCell colSpan={tableHead.length}>
                        <Grid container>
                          {_.values(item.expand)
                            .filter((obj) => _.isObject(obj))
                            .map(({ component: Component, props }, index) => (
                              <Grid item xs key={index}>
                                <Component {...props} />
                              </Grid>
                            ))}
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })()
            ) : (
              <TableBody>
                <TableRowItem
                  components={components}
                  onClick={onClick}
                  index={index}
                  data={item}
                />
              </TableBody>
            )}
          </Fragment>
        ))}
      </MuiTable>
    </PerfectScrollbar>
  );
};

Table.propTypes = {
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes.object,
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
