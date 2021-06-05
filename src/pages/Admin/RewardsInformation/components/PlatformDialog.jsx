import {
  InputAdornment,
  Typography,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Close } from "@material-ui/icons";
import { memo, useCallback } from "react";
import clsx from "clsx";
import _ from "lodash";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import { adminLivePlatformPoolActions } from "../livePlatformPool.slice";
import DefaultTextField from "components/TextFields/DefaultTextField";
import NavigationDialog from "components/Dialogs/NavigationDialog";
import { UploadIcon } from "components/Icons/Icons";
import useStyles from "../styles";

const PlatformDialog = (props) => {
  const { platformDialog } = useSelector(
    (state) => state.adminLivePlatformPoolReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDropAccepted = useCallback(([file]) => {
    const reader = new FileReader();
    reader.onload = () =>
      dispatch(adminLivePlatformPoolActions.uploadImage(reader.result));
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ".jpeg, .png",
    maxSize: 5000000,
    multiple: false,
    onDropAccepted,
  });

  const isNew = _.get(platformDialog, "isNew", false);
  const canSave = _.chain(platformDialog)
    .pick(["image", "name", "apiUrl"])
    .values()
    .every((value) => !_.isEmpty(value))
    .value();

  const handleChange = ({ target: { name, value } }) =>
    dispatch(adminLivePlatformPoolActions.changeDialogValue({ [name]: value }));

  const savePlatform = () =>
    dispatch(adminLivePlatformPoolActions.SavePlatform());

  const closeDialog = () =>
    dispatch(adminLivePlatformPoolActions.togglePlatformDialog(null));

  const deletePlatform = () =>
    dispatch(
      adminLivePlatformPoolActions.deletePlatform(
        _.get(platformDialog, "id", null)
      )
    );

  return (
    <NavigationDialog
      title={`${isNew ? "Add a new" : "Edit"} platform`}
      open={_.isObject(platformDialog)}
      className={classes.dialog}
      onClose={closeDialog}
      maxWidth="sm"
      fullWidth
    >
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <DefaultTextField
            value={_.get(platformDialog, "name", "")}
            onChange={handleChange}
            label="Platform name"
            className="outlined"
            autoComplete="off"
            name="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <DefaultTextField
            value={_.get(platformDialog, "apiUrl", "")}
            onChange={handleChange}
            className="outlined"
            autoComplete="off"
            label="API URL"
            name="apiUrl"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button className="bold">Check</Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <div
            className={clsx("uploadBox", isDragActive && "active")}
            {...getRootProps()}
          >
            <input type="hidden" name="platform-image" {...getInputProps()} />
            <Button
              className="capitalize rounded purple-text purple-border"
              startIcon={<UploadIcon />}
              variant="outlined"
            >
              Browse Files
            </Button>
            <Typography
              className="bold purple-text"
              variant="subtitle2"
              align="center"
            >
              DRAG & DROP FILES HERE
            </Typography>
          </div>
          <Typography
            className="grey-text"
            variant="caption"
            align="center"
            component="p"
          >
            Allowed format is .jpg or .png, max. size is 5 MB
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <LightBlueGradientButton
              onClick={savePlatform}
              disabled={!canSave}
              variant="contained"
              disableElevation
            >
              {isNew ? "Add" : "Update"}
            </LightBlueGradientButton>
          </Box>
        </Grid>
        {!isNew && _.isObject(platformDialog) && (
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={deletePlatform}
                className="orange-text"
                startIcon={<Close />}
                size="small"
              >
                Remove platform
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </NavigationDialog>
  );
};

export default memo(PlatformDialog);
