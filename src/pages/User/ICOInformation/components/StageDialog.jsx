import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { InputAdornment, Grid, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DateFnsUtils from "@date-io/moment";
import { memo } from "react";
import moment from "moment";
import _ from "lodash";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import DefaultDatePicker from "components/DatePickers/DefaultDatePicker";
import DefaultTextField from "components/TextFields/DefaultTextField";
import NavigationDialog from "components/Dialogs/NavigationDialog";
import { adminIcoInformationActions } from "../index.slice";
import { CalendarIcon } from "components/Icons/Icons";
import TextToSvg from "components/TextToSvg";
import useStyles from "../styles";

const StageDialog = () => {
  const { stageToEdit, isReadOnly } = useSelector(
    (state) => state.adminIcoInformationReducer.stages
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Edit stage
   */
  const closeDialog = () => {
    if (isReadOnly) return;
    dispatch(adminIcoInformationActions.setStageToEdit(null));
  };

  /**
   * Change value
   */
  const changeValue = ({ target: { name, value } }) =>
    dispatch(adminIcoInformationActions.editStageData({ [name]: value }));

  /**
   * Change date value
   */
  const changeDateValue = (name, date) => {
    if (moment(date).isValid())
      dispatch(
        adminIcoInformationActions.editStageData({ [name]: date.valueOf() })
      );
  };

  /**
   * Save changes
   */
  const saveChanges = () =>
    dispatch(adminIcoInformationActions.saveStageChanges());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <NavigationDialog
        title={`Edit ${_.get(stageToEdit, "name", "")}`}
        PaperProps={{ className: classes.stageDialog }}
        open={!_.isNull(stageToEdit)}
        onClose={closeDialog}
        maxWidth="sm"
        fullWidth
      >
        <Grid justify="center" spacing={2} container>
          <Grid item xs={12}>
            <DefaultTextField
              value={_.get(stageToEdit, "price", 0)}
              onChange={changeValue}
              className="outlined"
              disabled={isReadOnly}
              autoComplete="off"
              id="dialog-price"
              label="Price"
              type="number"
              name="price"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment className="inputIcon">
                    <TextToSvg text="BTC" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField
              value={_.get(stageToEdit, "available_tokens", 0)}
              id="dialog-available-tokens"
              label="Available tokens"
              name="available_tokens"
              onChange={changeValue}
              className="outlined"
              disabled={isReadOnly}
              autoComplete="off"
              type="number"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment className="inputIcon">
                    <TextToSvg text="TGLAB" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultDatePicker
              value={_.get(stageToEdit, "date_start", Date.now())}
              onChange={changeDateValue.bind(null, "date_start")}
              keyboardIcon={<CalendarIcon />}
              disabled={isReadOnly}
              format="DD.MM.YYYY"
              autoComplete="off"
              label="Start date"
              margin="normal"
              id="start_date"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultDatePicker
              value={_.get(stageToEdit, "date_end", Date.now())}
              onChange={changeDateValue.bind(null, "date_end")}
              keyboardIcon={<CalendarIcon />}
              disabled={isReadOnly}
              format="DD.MM.YYYY"
              autoComplete="off"
              label="End date"
              margin="normal"
              id="end_date"
            />
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField
              value={_.get(stageToEdit, "discount", 0)}
              onChange={changeValue}
              className="outlined"
              id="dialog-discount"
              disabled={isReadOnly}
              autoComplete="off"
              label="Discount"
              name="discount"
              type="number"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment className="inputIcon">
                    <TextToSvg text="%" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box justifyContent="center" display="flex" mt={1}>
              <LightBlueGradientButton
                onClick={saveChanges}
                disabled={isReadOnly}
                variant="contained"
                disableElevation
              >
                Update
              </LightBlueGradientButton>
            </Box>
          </Grid>
        </Grid>
      </NavigationDialog>
    </MuiPickersUtilsProvider>
  );
};

export default memo(StageDialog);
