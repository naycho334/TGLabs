import { AccessTimeOutlined } from "@material-ui/icons";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import { memo } from "react";
import moment from "moment";
import _ from "lodash";

import { TGCryptoColorIcon } from "components/Icons/Crypto";
import useSmallScreen from "hooks/useSmallScreen";
import { formatPrice } from "lib/helpers";

const DateComponent = (props) => {
  const { title, date } = props;
  const formattedDate = moment(date).format("d.M.y");
  const formattedTime = moment(date).format("hh:mm A");

  return (
    <Grid item xs={6} sm="auto">
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography className="sub-section-title" variant="overline">
            {title}:
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <AccessTimeOutlined />
            </Grid>
            <Grid item>
              <Typography variant="caption" component="p">
                {formattedDate}
              </Typography>
              <Typography variant="caption" component="p" className="date">
                {formattedTime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CurrentICOStageFooter = () => {
  const data = useSelector(
    (state) => state.adminIcoInformationReducer.stages.data
  );
  const isSmallScreen = useSmallScreen();

  const nextStage = _.chain(data)
    .values()
    .find((stage) => stage.date_start > Date.now())
    .value();

  return (
    <Grid
      className="icoStageFooter"
      justify="space-between"
      alignItems="center"
      spacing={2}
      container
    >
      {/* Next */}
      <Grid item xs="auto">
        <Typography className="bold" variant="body1">
          Next: {_.get(nextStage, "name", "")}
        </Typography>
      </Grid>

      <Grid item>
        <Grid container spacing={isSmallScreen ? 2 : 5}>
          {/* Start date */}
          <DateComponent
            title="Start"
            date={_.get(nextStage, "date_start", 0)}
          />

          {/* Price */}
          <Grid item xs={6} sm="auto">
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography className="sub-section-title" variant="overline">
                  Price:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className="bold">
                  {formatPrice(_.get(nextStage, "price", 0), "usd", "sp c")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Tokens */}
          <Grid item xs={6} sm="auto">
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography className="sub-section-title" variant="overline">
                  Tokens:
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Typography variant="body2" className="bold">
                      {Number(400000).toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TGCryptoColorIcon width={20} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* End date*/}
          <DateComponent title="End" date={_.get(nextStage, "date_end", 0)} />
        </Grid>
      </Grid>
    </Grid>
  );
};

DateComponent.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
};

export default memo(CurrentICOStageFooter);
