import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import AmountCell from "components/DataTable/components/AmountCell";
import ReferralEarningsBar from "./components/ReferralEarningsBar";
import TgLabCell from "components/DataTable/components/TgLabCell";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import AllUsersCard from "./components/AllUsersCard";
import { adminUserActions } from "./index.slice";
import DataTable from "components/DataTable";
import TextToSvg from "components/TextToSvg";
import { formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

const ReferralEarnings = () => {
  const { data, isReadOnly, cardsCount } = useSelector(
    (state) => state.adminUserReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Load more data
   */
  const loadMoreData = () =>
    dispatch(adminUserActions.loadMore("pendingWithdrawals"));

  const tableHead = [
    { label: "Date" },
    { label: "User" },
    { label: "TGLab" },
    { label: "" },
  ];

  /**
   * Format data
   */
  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.user },
    2: { value: item.tglab, className: "tglabValue" },
    3: {
      value: formatPrice(item.amount.value, "usd", "sp"),
      icon: () => <TextToSvg className="textSvg" text="USD" />,
    },
    id: item.id,
  });

  return (
    <Grid item xs={12} className={classes.referralEarnings}>
      <Section
        title="Referral Earnings"
        header={<ReferralEarningsBar tglabs={0.965264} />}
        headerProps={{ spacing: 2 }}
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={AllUsersCard}
          loadMore={loadMoreData}
          cardsCount={cardsCount}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: TgLabCell },
            {
              component: AmountCell,
              className: "black-text",
              props: { iconRight: true },
            },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(ReferralEarnings);
