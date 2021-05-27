import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import CheckBoxCell from "components/DataTable/components/CheckBoxCell";
import AwaitingApprovalCard from "./components/AwaitingApprovalCard";
import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import AwaitingApprovalBar from "./components/AwaitingApprovalBar";
import { awaitingApprovalActions } from "./awaitingApproval.slice";
import TgLabCell from "components/DataTable/components/TgLabCell";
import HashCell from "components/DataTable/components/HashCell";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

let timer;

const AwaitingApproval = () => {
  const { data, isReadOnly, search ,cardsCount} = useSelector(
    (state) => state.adminAwaitingApprovalReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const checkedRowsCount = _.values(data).filter((item) => item.checked).length;
  const allRowsChecked = _.values(data).every((item) => item.checked);

  /**
   * Format table data
   */
  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.user },
    2: { value: item.amount, unit: "BTC", icon: BitcoinColorIcon },
    3: { value: item.tglab },
    4: { value: item.hash },
    5: { value: item.status, className: item.status },
    6: { value: item.checked, id: item.id },
  });

  /**
   * Check/Unckeck all rows
   */
  const checkUncheckAllRows = () =>
    dispatch(awaitingApprovalActions.checkAllRows());

  /**
   * Check a row
   */
  const checkRow = (rowData) =>
    dispatch(awaitingApprovalActions.checkRow(rowData));

  /**
   * Change search text
   */
  const changeSearch = ({ target: { value } }) => {
    dispatch(awaitingApprovalActions.changeSearch(value));

    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => dispatch(awaitingApprovalActions.fetchData()),
      1000
    );
  };

  /**
   * Load more data
   */
  const loadMoreData = () => dispatch(awaitingApprovalActions.loadMore());

  const tableHead = [
    { label: "Date" },
    { label: "User" },
    { label: "Amount" },
    { label: "TGLab" },
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

  return (
    <Grid item xs={12} className={classes.awaitingApproval}>
      <Section
        title="Awaiting Approval"
        header={
          <AwaitingApprovalBar
            count={checkedRowsCount}
            buttonProps={{
              disabled: _.eq(checkedRowsCount, 0) || isReadOnly,
              onClick: () => alert("Approve"),
            }}
            inputProps={{
              value: search,
              onChange: changeSearch,
              disabled: isReadOnly,
            }}
          />
        }
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={AwaitingApprovalCard}
          cardsCount={cardsCount}
          loadMore={loadMoreData}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: AmountCell },
            { component: TgLabCell },
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

export default memo(AwaitingApproval);
