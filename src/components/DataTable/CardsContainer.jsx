import { Grid, Divider, Box, Button } from "@material-ui/core";
import { MoreHorizOutlined } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Fragment, memo } from "react";
import propTypes from "prop-types";

const CardsContainer = (props) => {
  const { cardComponent: Component, tableHead, data, components } = props;

  return (
    <>
      <PerfectScrollbar style={{ maxHeight: 590 }}>
        <Box padding={1}>
          <Grid container spacing={2}>
            {data.map((item, index, { length }) => (
              <Fragment key={index}>
                <Component
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
      </PerfectScrollbar>
      <Button className="loadMore" size="small">
        <span>Load More</span>
        <MoreHorizOutlined />
      </Button>
    </>
  );
};

CardsContainer.propTypes = {
  cardComponent: propTypes.any.isRequired,
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes,
      props: propTypes.object,
    })
  ).isRequired,
  tableHead: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      props: propTypes.object,
    })
  ).isRequired,
  data: propTypes.object.isRequired,
};

export default memo(CardsContainer);
