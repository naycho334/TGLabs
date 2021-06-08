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
    noDivider,
    cardsCount,
    components,
    className,
    keepTable,
    tableHead,
    loadMore,
    mapData,
    onClick,
    data,
  } = props;
  const isSmallScreen = useSmallScreen();
  const classes = useStyles();

  const mappedData = _.values(data).map(mapData);

  const handleClick = (id, ev) => {
    if (!["INPUT"].includes(ev.target.tagName)) onClick(id);
  };

  return (
    <div className={clsx(classes.dataTable, className)}>
      {isSmallScreen && !keepTable ? (
        <CardsContainer
          onClick={_.isFunction(onClick) ? handleClick : null}
          canLoadMore={_.lt(cardsCount, mappedData.length)}
          data={mappedData.slice(0, cardsCount)}
          cardComponent={cardComponent}
          components={components}
          tableHead={tableHead}
          loadMore={loadMore}
        />
      ) : (
        <>
          {!noDivider && <Divider className={classes.separator} />}
          <Table
            onClick={_.isFunction(onClick) ? handleClick : null}
            components={components}
            tableHead={tableHead}
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
  noDivider: propTypes.bool,
  keepTable: propTypes.bool,
  onClick: propTypes.func,
};

DataTable.defaultProps = {
  noDivider: false,
  cardsCount: 3,
};

export default memo(DataTable);
