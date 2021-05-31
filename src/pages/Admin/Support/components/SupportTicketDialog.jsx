import {
  Typography,
  MenuItem,
  Hidden,
  Grid,
  Box,
  InputBase,
} from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import DefaultTextField from "components/TextFields/DefaultTextField";
import NavigationDialog from "components/Dialogs/NavigationDialog";
import NoFieldsetSelect from "components/Selects/NoFieldsetSelect";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import useStyles from "../styles";

const SupportTicketDialog = (props) => {
  const { open, data, isReadOnly, onClose, onChange, onSave } = props;
  const classes = useStyles();

  return (
    <NavigationDialog
      title={`Edit Ticket (${_.get(data, "ticketId", "_")})`}
      PaperProps={{ className: classes.stageDialog }}
      {...(isReadOnly ? {} : { onClose })}
      maxWidth="sm"
      open={open}
      fullWidth
      header={
        <Hidden mdDown>
          <Grid item>
            <DateCell value={_.get(data, "date", "_")} />
          </Grid>
          <Grid item>
            <UserCell value={_.get(data, "username", "_")} />
          </Grid>
        </Hidden>
      }
    >
      <Grid justify="center" spacing={2} container>
        <Hidden lgUp>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <DateCell value={_.get(data, "date", "_")} />
              </Grid>
              <Grid item>
                <UserCell value={_.get(data, "username", "_")} />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        {[
          { title: "Subject", path: "subject" },
          { title: "Description", path: "description" },
        ].map(({ title, path }, index) => (
          <Grid item xs={12} key={index}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  className="blue-text bold"
                  variant="subtitle2"
                  component="span"
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{_.get(data, path, "_")}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <DefaultTextField
            placeholder="Write message here to user..."
            value={_.get(data, "message", "_")}
            InputLabelProps={{ shrink: true }}
            disabled={isReadOnly}
            className="outlined"
            onChange={onChange}
            id="dialog-message"
            autoComplete="off"
            label="Message"
            name="message"
            size="small"
            multiline
            fullWidth
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <DefaultTextField
            placeholder="Write internal notes here..."
            InputLabelProps={{ shrink: true }}
            value={_.get(data, "notes", "_")}
            disabled={isReadOnly}
            className="outlined"
            onChange={onChange}
            autoComplete="off"
            id="dialog-notes"
            label="Notes"
            name="notes"
            size="small"
            multiline
            fullWidth
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <NoFieldsetSelect
            value={_.get(data, "status", "_")}
            classes={{select: "outlined"}}
            disabled={isReadOnly}
            input={<InputBase />}
            onChange={onChange}
            name="status"
            fullWidth
          >
            {["Complete", "Unconfirmed", "Pending"].map((status) => (
              <MenuItem dense value={String(status).toLowerCase()} key={status}>
                {status}
              </MenuItem>
            ))}
          </NoFieldsetSelect>
        </Grid>
        <Grid item xs={12}>
          <Box justifyContent="center" display="flex" mt={1}>
            <LightBlueGradientButton
              disabled={isReadOnly}
              variant="contained"
              disableElevation
              onClick={onSave}
            >
              Update
            </LightBlueGradientButton>
          </Box>
        </Grid>
      </Grid>
    </NavigationDialog>
  );
};

SupportTicketDialog.propTypes = {
  onChange: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
  isReadOnly: propTypes.bool,
  data: propTypes.any,
};

export default memo(SupportTicketDialog);
