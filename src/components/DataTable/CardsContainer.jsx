import { Grid, Divider, Box, Button } from "@material-ui/core";
import { MoreHorizOutlined } from "@material-ui/icons";
import { Fragment, memo } from "react";
import propTypes from "prop-types";
import _ from "lodash";

const CardsContainer = (props) => {
  const {
    cardComponent: Component,
    canLoadMore,
    components,
    tableHead,
    loadMore,
    onClick,
    data,
  } = props;

  return (
    <>
      <Box padding={1} py={3}>
        <Grid container spacing={2}>
          {data.map((item, index, { length }) => (
            <Fragment key={index}>
              <Component
                {...(_.isFunction(onClick)
                  ? {
                      onClick: onClick.bind(null, item.id),
                      "data-clickable": 1,
                    }
                  : {})}
                components={components}
                tableHead={tableHead}
                data={item}
              />
              {length > index + 1 && (
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              )}
            </Fragment>
          ))}
        </Grid>
      </Box>
      {canLoadMore && (
        <Button onClick={loadMore} className="loadMore" size="small">
          <span>Load More</span>
          <MoreHorizOutlined />
        </Button>
      )}
    </>
  );
};

CardsContainer.propTypes = {
  cardComponent: propTypes.any.isRequired,
  canLoadMore: propTypes.bool.isRequired,
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes.object,
      props: propTypes.object,
    })
  ).isRequired,
  tableHead: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      props: propTypes.object,
    })
  ).isRequired,
  loadMore: propTypes.func.isRequired,
  data: propTypes.any.isRequired,
};

export default memo(CardsContainer);
