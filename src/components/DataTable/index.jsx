import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";
import useSmallScreen from "hooks/useSmallScreen";
import CardsContainer from "./CardsContainer";
import Table from "./Table";

const DataTable = (props) => {
  const { tableHead, components, mapData, data, cardComponent } = props;
  const isSmallScreen = useSmallScreen();
  const classes = useStyles();

  const mappedData = data.map(mapData);

  return (
    <div className={clsx(classes.dataTable)}>
      {isSmallScreen ? (
        <CardsContainer
          cardComponent={cardComponent}
          tableHead={tableHead}
          components={components}
          data={mappedData}
        />
      ) : (
        <Table
          components={components}
          tableHead={tableHead}
          data={mappedData}
        />
      )}
    </div>
  );
};

DataTable.propTypes = {
  tableHead: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      props: propTypes.object,
    })
  ).isRequired,
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes.object,
      props: propTypes.object,
    })
  ).isRequired,
  data: propTypes.object.isRequired,
};

export default memo(DataTable);
