import { useDispatch, useSelector } from "react-redux";
import { IconButton, Badge } from "@material-ui/core";
import { memo, useState } from "react";
import _ from "lodash";

import { notificationsActions } from "../notifications.slide";
import { NotificationIcon } from "../../Icons/Icons";
import NotificationsList from "./NotificationsList";
import Notification from "./Notification";

const Notifications = (props) => {
  const notifications = useSelector((state) =>
    _.values(_.get(state, `notificationsReducer.notifications`, {}))
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  /**
   * Open notifications list
   */
  const openNotificationsList = (event) => setAnchorEl(event.currentTarget);

  /**
   * Close notifications list
   */
  const closeNotificationsList = () => setAnchorEl(null);

  /**
   * Delete notification
   */
  const deleteNotification = (id) =>
    dispatch(notificationsActions.deleteNotification(id));

  /**
   * Clear all notifications
   */
  const clearAllNotifications = () => dispatch(notificationsActions.clearAll());

  return (
    <>
      <IconButton onClick={openNotificationsList}>
        <Badge
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          badgeContent={notifications.length}
          color="secondary"
          variant="dot"
        >
          <NotificationIcon />
        </Badge>
      </IconButton>

      <NotificationsList
        id={open && "notifications-popover"}
        onClose={closeNotificationsList}
        clearAll={clearAllNotifications}
        count={notifications.length}
        anchorEl={anchorEl}
        open={open}
      >
        {notifications.map((data) => (
          <Notification
            deleteNotification={deleteNotification.bind(null, data.id)}
            content={data.content}
            title={data.title}
            type={data.type}
            key={data.id}
          />
        ))}
      </NotificationsList>
    </>
  );
};

export default memo(Notifications);
