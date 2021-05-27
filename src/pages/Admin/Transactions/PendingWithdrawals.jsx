import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import PendingWithdrawalsCard from "./components/PendingWithdrawalsCard";
import CheckBoxCell from "components/DataTable/components/CheckBoxCell";
import PendingWithdrawalsBar from "./components/PendingWithdrawalsBar";
import AddressCell from "components/DataTable/components/AddressCell";
import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import HashCell from "components/DataTable/components/HashCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import { adminTransactionsActions } from "./index.slice";
import DataTable from "components/DataTable";
import Section from "components/Section";

let timer;

const PendingWithdrawals = () => {
  const { data, isReadOnly, cardsCount } = useSelector(
    (state) => state.adminTransactionsReducer.pendingWithdrawals
  );
  const dispatch = useDispatch();
  const allRowsChecked = _.values(data).every((row) => row.checked);
  const checkedRowsCount = _.chain(data)
    .filter((row) => row.checked)
    .size()
    .value();

  /**
   * Check/uncheck all rows
   */
  const checkUncheckAllRows = () =>
    dispatch(adminTransactionsActions.checkAllRows());

  /**
   * Load more data
   */
  const loadMoreData = () =>
    dispatch(adminTransactionsActions.loadMore("pendingWithdrawals"));

  const tableHead = [
    { label: "Date" },
    { label: "User" },
    { label: "Amount" },
    { label: "Address" },
    { label: "Hash" },
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
    0: { value: item.date },
    1: { value: item.user },
    2: {
      value: item.amount,
      unit: "BTC",
      icon: BitcoinColorIcon,
      usd: 8965332,
    },
    3: { value: item.address },
    4: { value: item.hash },
    5: { value: item.status, className: item.status },
    6: { value: item.checked, id: item.id },
  });

  /**
   * Check row
   */
  const checkRow = (id) => dispatch(adminTransactionsActions.checkRow(id));

  /**
   * Change search text
   */
  const changeSearch = ({ target: { value } }) => {
    dispatch(adminTransactionsActions.changeSearch(value));

    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => dispatch(adminTransactionsActions.fetchPendingWithdrawalsData()),
      1000
    );
  };

  return (
    <Grid item xs={12}>
      <Section
        title="Pending Withdrawals"
        header={
          <PendingWithdrawalsBar
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
          cardComponent={PendingWithdrawalsCard}
          loadMore={loadMoreData}
          cardsCount={cardsCount}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: AmountCell },
            { component: AddressCell },
            { component: HashCell },
            { component: StatusCell, tableCellProps: { align: "right" } },
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

export default memo(PendingWithdrawals);
