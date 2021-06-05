import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";

import NewICOPurchaseDialog from "./components/NewICOPurchaseDialog";
import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import TgLabCell from "components/DataTable/components/TgLabCell";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import HashCell from "components/DataTable/components/HashCell";
import { adminIcoPurchasesActions } from "./icoPurchases.slice";
import ICOPurchasesCard from "./components/ICOPurchasesCard";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import ICOPurchasesBar from "./components/ICOPurchasesBar";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

const tableHead = [
  { label: "Date" },
  { label: "User" },
  { label: "Amount" },
  { label: "TGLab" },
  { label: "Hash" },
  { label: "" },
];

let timer;

const ICOPurchases = () => {
  const { period, data, search, isReadOnly, cardsCount } = useSelector(
    (state) => state.adminIcoPurchasesReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Format data
   */
  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.user },
    2: { value: item.amount, unit: "BTC", icon: BitcoinColorIcon },
    3: { value: item.tglab },
    4: { value: item.hash },
    5: { value: item.status, className: item.status },
  });

  /**
   * Change period
   */
  const changePeriod = (event, period) =>
    dispatch(adminIcoPurchasesActions.changePeriod(period));

  /**
   * Change search text
   */
  const changeSearch = ({ target: { value } }) => {
    dispatch(adminIcoPurchasesActions.changeSearch(value));

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => dispatch(adminIcoPurchasesActions.fetchData()), 1000);
  };

  /**
   * Open dialog
   */
  const openDialog = () => dispatch(adminIcoPurchasesActions.toggleDialog(true));

  /**
   * Load more data
   */
  const loadMoreData = () => dispatch(adminIcoPurchasesActions.loadMore());

  return (
    <Grid item xs={12} lg={8} className={classes.icoPurchases}>
      <Section
        title="ICO Purchases"
        headerProps={{
          justify: "space-between",
          className: "reorder",
          spacing: 1,
        }}
        header={
          <ICOPurchasesBar
            tabsProps={{
              value: period,
              onChange: changePeriod,
              disabled: isReadOnly,
            }}
            inputProps={{
              value: search,
              onChange: changeSearch,
              disabled: isReadOnly,
            }}
            buttonProps={{
              onClick: openDialog,
            }}
          />
        }
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={ICOPurchasesCard}
          cardsCount={cardsCount}
          loadMore={loadMoreData}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: AmountCell },
            { component: TgLabCell },
            { component: HashCell },
            { component: StatusCell, tableCellProps: { align: "right" } },
          ]}
        />
        <NewICOPurchaseDialog />
      </Section>
    </Grid>
  );
};

export default memo(ICOPurchases);
