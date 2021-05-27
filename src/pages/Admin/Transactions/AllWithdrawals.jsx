import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";

import AddressCell from "components/DataTable/components/AddressCell";
import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import AllWithdrawalsCard from "./components/AllWithdrawalsCard";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import HashCell from "components/DataTable/components/HashCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import { adminTransactionsActions } from "./index.slice";
import DataTable from "components/DataTable";
import Section from "components/Section";

const AllWithdrawals = () => {
  const { data, cardsCount } = useSelector(
    (state) => state.adminTransactionsReducer.allWithdrawals
  );
  const dispatch = useDispatch();

  /**
   * Load more data
   */
   const loadMoreData = () =>
   dispatch(adminTransactionsActions.loadMore("allWithdrawals"));

  const tableHead = [
    { label: "Date" },
    { label: "User" },
    { label: "Amount" },
    { label: "Address" },
    { label: "Hash" },
    { label: "" },
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
  });

  return (
    <Grid item xs={12}>
      <Section title="All Withdrawals">
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={AllWithdrawalsCard}
          loadMore={loadMoreData}
          cardsCount={cardsCount}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: AmountCell },
            { component: AddressCell },
            { component: HashCell },
            { component: StatusCell, tableCellProps: { align: "right" } },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(AllWithdrawals);
