import { lazy, memo, useState } from "react";
import { Grid } from "@material-ui/core";

import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import TgLabCell from "components/DataTable/components/TgLabCell";
import DateCell from "components/DataTable/components/DateCell";
import HashCell from "components/DataTable/components/HashCell";
import UserCell from "components/DataTable/components/UserCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import CustomCard from "components/Section/CustomCard";
import DataTable from "components/DataTable";
import useStyles from "./styles";

const TabContainer = lazy(() => import("components/TabContainer"));

const tableHead = [
  { label: "Date" },
  { label: "TGLab" },
  { label: "Amount" },
  { label: "" },
];

const tableData = Array(8).fill({
  date: "14.2.2021 07:40 PM",
  amount: "0,00034056",
  tglab: "0.456733",
  status: "complete",
});

const DistributionHistory = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  /**
   * Change table type
   */
  const changeTableType = (event, newValue) => setValue(newValue);

  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.tglab },
    2: { value: item.amount, unit: "BTC", icon: BitcoinColorIcon },
    3: { value: item.status, className: item.status },
  });

  return (
    <Grid item xs={12}>
      <CustomCard>
        <div className={classes.tabTable}>
          <TabContainer
            value={value}
            onChange={changeTableType}
            data={[
              { label: "Distribution History" },
              { label: "My History" },
            ].map((item) => ({
              ...item,
              Component: () => (
                <DataTable
                  tableHead={tableHead}
                  mapData={mapData}
                  data={tableData}
                  cardComponent={() => null}
                  noDivider
                  components={[
                    { component: DateCell },
                    { component: TgLabCell },
                    { component: AmountCell },
                    {
                      component: StatusCell,
                      tableCellProps: { align: "right" },
                    },
                  ]}
                />
              ),
            }))}
          />
        </div>
      </CustomCard>
    </Grid>
  );
};

export default memo(DistributionHistory);
