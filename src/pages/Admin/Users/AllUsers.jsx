import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import CheckBoxCell from "components/DataTable/components/CheckBoxCell";
import StatusCell from "components/DataTable/components/StatusCell";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import HashCell from "components/DataTable/components/HashCell";
import TextCell from "components/DataTable/components/TextCell";
import AllUsersCard from "./components/AllUsersCard";
import AllUsersBar from "./components/AllUsersBar";
import { adminUsersActions } from "./index.slice";
import { LockIcon } from "components/Icons/Icons";
import DataTable from "components/DataTable";
import { useHistory } from "react-router";
import Section from "components/Section";
import useStyles from "./styles";
import clsx from "clsx";
import { endpoints } from "routes";

let timer;

const AllUsers = () => {
  const { data, isReadOnly, cardsCount } = useSelector(
    (state) => state.adminUsersReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const allRowsChecked = _.values(data).every((row) => row.checked);
  const checkedRowsCount = _.chain(data)
    .filter((row) => row.checked)
    .size()
    .value();

  /**
   * Check/uncheck all rows
   */
  const checkUncheckAllRows = () => dispatch(adminUsersActions.checkAllRows());

  /**
   * Load more data
   */
  const loadMoreData = () =>
    dispatch(adminUsersActions.loadMore("pendingWithdrawals"));

  const tableHead = [
    { label: "Reg. Date" },
    { label: "UserId" },
    { label: "Username" },
    { label: "Email" },
    { label: "Country" },
    { label: "" },
    { label: "" },
    {
      label: "All",
      checkbox: true,
      checkBoxProps: {
        onChange: checkUncheckAllRows,
        checked: allRowsChecked,
        disabled: isReadOnly,
      },
    },
  ];

  /**
   * Format data
   */
  const mapData = (item) => ({
    0: { value: item.regDate },
    1: { value: item.userId },
    2: { value: item.username },
    3: { value: item.email },
    4: { value: item.country, className: "grey-text" },
    5: { value: item.status },
    6: { value: null, className: clsx("lockiIcon", item.status) },
    7: { value: item.checked, id: item.id },
    id: item.id,
  });

  /**
   * Check row
   */
  const checkRow = (id) => dispatch(adminUsersActions.checkRow(id));

  /**
   * Change search text
   */
  const changeSearch = ({ target: { value } }) => {
    dispatch(adminUsersActions.changeSearch(value));

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => dispatch(adminUsersActions.fetchData()), 1000);
  };

  /**
   * Open user page
   */
  const openUserPage = (id) =>
    history.push(endpoints.dashboard.admin.user.index.replace(":id", id));

  return (
    <Grid item xs={12} className={classes.allUsers}>
      <Section
        title="Pending Withdrawals"
        header={
          <AllUsersBar
            approveButtonProps={{
              disabled: isReadOnly || checkedRowsCount <= 0,
              onClick: () => alert("Approve"),
              count: checkedRowsCount,
            }}
            rejectButtonProps={{
              disabled: isReadOnly || checkedRowsCount <= 0,
              onClick: () => alert("Reject"),
              count: checkedRowsCount,
            }}
            inputProps={{ onChange: changeSearch, disabled: isReadOnly }}
          />
        }
        headerProps={{ spacing: 2 }}
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={AllUsersCard}
          loadMore={loadMoreData}
          cardsCount={cardsCount}
          onClick={openUserPage}
          components={[
            { component: DateCell },
            { component: HashCell },
            { component: UserCell },
            { component: TextCell },
            { component: TextCell },
            { component: StatusCell, tableCellProps: { align: "right" } },
            { component: LockIcon, tableCellProps: { padding: "checkbox" } },
            {
              component: CheckBoxCell,
              props: { onChange: checkRow, disabled: isReadOnly },
              tableCellProps: {
                padding: "checkbox",
                align: "right",
              },
            },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(AllUsers);
