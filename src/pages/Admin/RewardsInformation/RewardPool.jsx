import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";

import AmountCell from "components/DataTable/components/AmountCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import RewardPoolBar from "./components/RewardPoolBar";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

const RewardPool = () => {
  const { data, cardsCount } = useSelector(
    (state) => state.adminRewardPoolReducer
  );
  // const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Format table data
   */
  const mapData = (item) => ({
    0: {
      unit: String(item.available.currency).toUpperCase(),
      value: item.available.value,
      usd: item.available.usd,
      icon: BitcoinColorIcon,
    },
    1: {
      unit: String(item.available.currency).toUpperCase(),
      value: item.available.value,
      usd: item.available.usd,
      icon: BitcoinColorIcon,
    },
  });

  /**
   * Load more data
   */
  // const loadMoreData = () => dispatch(RewardPoolActions.loadMore());

  const tableHead = [{ label: "Available" }, { label: "My estimate amount" }];

  return (
    <Grid item xs={12} lg={6} className={classes.RewardPool}>
      <Section
        headerProps={{ spacing: 1 }}
        header={<RewardPoolBar />}
        title="Reward Pool"
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          keepTable
          cardsCount={cardsCount}
          // loadMore={loadMoreData}
          loadMore={() => {}}
          components={[{ component: AmountCell }, { component: AmountCell }]}
        />
      </Section>
    </Grid>
  );
};

export default memo(RewardPool);
