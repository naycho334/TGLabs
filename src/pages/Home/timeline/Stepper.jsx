import { AccessTimeOutlined, CheckOutlined } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import propTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";

import LightBlueTypography from "../../../components/Typography/LightBlueTypography";
import List from "./List";

const Stepper = (props) => {
  const { steps } = props;
  const currentList = _.get(_.find(steps, { status: "currently" }), "list", []);

  return (
    <div className="stepper_container">
      <div className="stepper">
        <div className="gutters">
          {steps.map(({ status, active }, i) => (
            <div
              className={clsx("step_icon", status, active && "active")}
              key={i}
            >
              {status === "pending" ? (
                <AccessTimeOutlined />
              ) : (
                <CheckOutlined />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gutters">
        <Grid container>
          {steps
            .filter((step) => !!step.list.length)
            .map((step, o) => (
              <Grid
                className={clsx("step", step.status, step.active && "active")}
                key={o}
                item
                xs
              >
                <Grid container>
                  <Grid item xs={12}>
                    <LightBlueTypography
                      className="normal"
                      component="span"
                      variant="h6"
                    >
                      {step.label}
                    </LightBlueTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <LightBlueTypography
                      className="bold"
                      component="p"
                      variant="h5"
                    >
                      {step.year}
                    </LightBlueTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <List list={step.list} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          <Grid item xs={12} className="hideOnDesktop">
            <List list={currentList} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  steps: propTypes.array.isRequired,
};

Stepper.defaultProps = {
  steps: [],
};

export default Stepper;
