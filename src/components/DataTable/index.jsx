import { Divider } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

import useStyles from "components/DataTable/styles";
import useSmallScreen from "hooks/useSmallScreen";
import CardsContainer from "./CardsContainer";
import Table from "./Table";

const DataTable = (props) => {
  const {
    cardComponent,
    cardsCount,
    components,
    className,
    tableHead,
    loadMore,
    mapData,
    onClick,
    data,
  } = props;
  const isSmallScreen = useSmallScreen();
  const classes = useStyles();

  const mappedData = (_.isObject(data) ? _.values(data) : data).map(mapData);
  
  const handleClick = (id, ev) => {
    if (ev.target.tagName !== "INPUT") onClick(id);
  };

  return (
    <div className={clsx(classes.dataTable, className)}>
      {isSmallScreen ? (
        <CardsContainer
          canLoadMore={_.lt(cardsCount, mappedData.length)}
          data={mappedData.slice(0, cardsCount)}
          cardComponent={cardComponent}
          components={components}
          tableHead={tableHead}
          onClick={handleClick}
          loadMore={loadMore}
        />
      ) : (
        <>
          <Divider className={classes.separator} />
          <Table
            components={components}
            tableHead={tableHead}
            onClick={handleClick}
            data={mappedData}
          />
        </>
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
  cardsCount: propTypes.number.isRequired,
  loadMore: propTypes.func.isRequired,
  data: propTypes.any.isRequired,
  className: propTypes.string,
  onClick: propTypes.func,
};

DataTable.defaultProps = {
  cardsCount: 3,
};

export default memo(DataTable);
