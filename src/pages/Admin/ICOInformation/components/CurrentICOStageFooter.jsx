import { AccessTimeOutlined } from "@material-ui/icons";
import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import moment from "moment";

import { TGCryptoColorIcon } from "components/Icons/Crypto";
// import useStyles from "./styles";

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
  // const classes = useStyles();

  return (
    <Grid className="icoStageFooter" container spacing={5} alignItems="center">
      {/* Next */}
      <Grid item xs={12} lg>
        <Typography className="bold" variant="body1">
          Next: ICO Stage 2
        </Typography>
      </Grid>

      {/* Start date */}
      <DateComponent title="Start" date={Date.now()} />

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
              $1.80 USD
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
      <DateComponent title="End" date={Date.now()} />
    </Grid>
  );
};

DateComponent.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
};

export default memo(CurrentICOStageFooter);
