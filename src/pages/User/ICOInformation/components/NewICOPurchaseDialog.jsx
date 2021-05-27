import { useDispatch, useSelector } from "react-redux";
import { Grid, Box } from "@material-ui/core";
import { memo } from "react";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import DefaultTextField from "components/TextFields/DefaultTextField";
import NavigationDialog from "components/Dialogs/NavigationDialog";
import { adminIcoPurchasesActions } from "../icoPurchases.slice";
import useStyles from "../styles";

const NewICOPurchaseDialog = () => {
  const { open, hash, isReadOnly } = useSelector(
    (state) => state.adminIcoPurchasesReducer.newPurchase
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Close dialog
   */
  const closeDialog = () => {
    if (isReadOnly) return;
    dispatch(adminIcoPurchasesActions.toggleDialog(false));
  };

  /**
   * Change value
   */
  const changeValue = ({ target: { value } }) =>
    dispatch(adminIcoPurchasesActions.changeHash(value));

  /**
   * Save changes
   */
  const saveChanges = () => dispatch(adminIcoPurchasesActions.save());

  return (
    <NavigationDialog
      PaperProps={{ className: classes.NewICOPurchaseDialog }}
      title="Add New ICO Purchase"
      onClose={closeDialog}
      maxWidth="sm"
      open={open}
      fullWidth
    >
      <Grid justify="center" spacing={2} container>
        <Grid item xs={12}>
          <DefaultTextField
            label="Transaction Hash"
            onChange={changeValue}
            disabled={isReadOnly}
            className="outlined"
            id="dialog-purchase"
            autoComplete="off"
            value={hash}
            size="small"
            name="hash"
            fullWidth
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
  );
};

export default memo(NewICOPurchaseDialog);
