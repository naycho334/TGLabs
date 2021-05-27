import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";

import TopContributorsCard from "./components/TopContributorsCard";
import TgLabCell from "components/DataTable/components/TgLabCell";
import { topContributorsActions } from "./topContributors.slice";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

const tableHead = [{ label: "Date" }, { label: "User" }, { label: "" }];

const TopContributors = () => {
  const { data, cardsCount } = useSelector(
    (state) => state.adminTopContributorsReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.user },
    2: { value: item.tglab },
  });

  const loadMoreData = () => dispatch(topContributorsActions.loadMore());

  return (
    <Grid item xs={12} lg={4} className={classes.topContributors}>
      <Section title="Top Contributors">
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardsCount={cardsCount}
          cardComponent={TopContributorsCard}
          loadMore={loadMoreData}
          components={[
            { component: DateCell },
            { component: UserCell },
            { component: TgLabCell },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(TopContributors);
