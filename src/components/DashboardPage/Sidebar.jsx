import {
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItem,
  Toolbar,
  Divider,
  AppBar,
  Drawer,
  List,
  Link,
} from "@material-ui/core";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { memo, Fragment, lazy } from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";

import SidebarFooter from "./SidebarFooter";
import TGLogo from "../Animations/TGLogo";
import { endpoints } from "../../routes";
import useStyles from "./styles";

import { ReactComponent as RewardsInformationIcon } from "../../assets/svgs/icons/icon_rewards_information-panel.svg";
import { ReactComponent as ICOInformationIcon } from "../../assets/svgs/icons/icon_ico_information-panel.svg";
import { ReactComponent as ICODashboardIcon } from "../../assets/svgs/icons/icon_ico_dashboard-panel.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/svgs/icons/icon_transactions-panel.svg";
import { ReactComponent as ReferralsIcon } from "../../assets/svgs/icons/icon_referrals-panel.svg";
import { ReactComponent as WithdrawIcon } from "../../assets/svgs/icons/icon_withdraw-panel.svg";
import { ReactComponent as ProductsIcon } from "../../assets/svgs/icons/icon_products-panel.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svgs/icons/icon_settings-panel.svg";
import { ReactComponent as RewardsIcon } from "../../assets/svgs/icons/icon_rewards-panel.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svgs/icons/icon_logout-panel.svg";
import { ReactComponent as UserIcon } from "../../assets/svgs/icons/icon_users-panel.svg";
import { ReactComponent as SupportIcon } from "../../assets/svgs/icons/icon_support.svg";
import { ReactComponent as FAQIcon } from "../../assets/svgs/icons/icon_faq-panel.svg";

const ReferFriend = lazy(() => import("./ReferFriend"));

const links = {
  menu: [
    // Admin links
    {
      title: "ICO Information",
      Icon: ICOInformationIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.ico_information.index,
      matches: [endpoints.dashboard.admin.ico_information.index],
    },
    {
      title: "Rewards Information",
      Icon: RewardsIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.rewards_information.index,
      matches: [endpoints.dashboard.admin.rewards_information.index],
    },
    {
      title: "Transactions",
      Icon: TransactionsIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.transactions.index,
      matches: [endpoints.dashboard.admin.transactions.index],
    },
    {
      title: "Users",
      Icon: UserIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.users.index,
      matches: [endpoints.dashboard.admin.users.index],
    },
    {
      title: "Products",
      Icon: ProductsIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.products.index,
      matches: [endpoints.dashboard.admin.products.index],
    },
    {
      title: "Support",
      Icon: SupportIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.support.index,
      matches: [endpoints.dashboard.admin.support.index],
    },

    // User links
    {
      title: "ICO Dashboard",
      Icon: ICODashboardIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.ico_dashboard.index,
      matches: [endpoints.dashboard.user.ico_dashboard.index],
    },
    {
      title: "ICO Information",
      Icon: ICOInformationIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.ico_information.index,
      matches: [endpoints.dashboard.user.ico_information.index],
    },
    {
      title: "Rewards",
      Icon: RewardsIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.rewards.index,
      matches: [endpoints.dashboard.user.rewards.index],
    },
    {
      title: "Rewards Information",
      Icon: RewardsInformationIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.rewards_information.index,
      matches: [endpoints.dashboard.user.rewards_information.index],
    },
    {
      title: "Referrals",
      Icon: ReferralsIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.referrals.index,
      matches: [endpoints.dashboard.user.referrals.index],
    },
    {
      title: "Withdraw",
      Icon: WithdrawIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.withdraw.index,
      matches: [endpoints.dashboard.user.withdraw.index],
    },
    {
      title: "FAQ",
      Icon: FAQIcon,
      forAdmin: false,
      link: endpoints.dashboard.user.faq.index,
      matches: [endpoints.dashboard.user.faq.index],
    },
  ],
  account: [
    // Admin links
    {
      title: "Settings",
      Icon: SettingsIcon,
      link: endpoints.dashboard.admin.settings.index,
      forAdmin: true,
      matches: [endpoints.dashboard.admin.settings.index],
    },

    // User links
    {
      title: "Settings",
      Icon: SettingsIcon,
      link: endpoints.dashboard.user.settings.index,
      forAdmin: false,
      matches: [endpoints.dashboard.user.settings.index],
    },

    // Commun buttons
    ...Array(2)
      .fill(1)
      .map((e, index) => ({
        title: "Logout",
        Icon: LogoutIcon,
        forAdmin: index === 0,
        onClick: () => alert("LOGOUT"),
      })),
  ],
};

const Sidebar = (props) => {
  const { isAdmin, variant, open, onClose } = props;
  const classes = useStyles();
  const { pathname } = useLocation();

  const isMatched = (arrayOfPaths) =>
    arrayOfPaths
      .map((path_) =>
        matchPath(pathname, {
          strict: true,
          exact: true,
          path: path_,
        })
      )
      .some((result) => _.get(result, "isExact", false) === true);

  return (
    <Drawer
      open={open || variant === "permanent"}
      className={classes.sidebar}
      variant={variant}
      onClose={onClose}
    >
      <AppBar
        color="transparent"
        className="appBar"
        position="static"
        elevation={0}
      >
        <Toolbar className={clsx(classes.drawer, "sidebar")}>
          <TGLogo className="appLogo" />
        </Toolbar>
      </AppBar>

      <PerfectScrollbar>
        {[
          { title: "Menu", list: links.menu },
          { title: "Account", list: links.account },
        ].map(({ title, list }, key) => (
          <Fragment key={key}>
            {/* Links list */}
            <List
              subheader={
                <ListSubheader className="subheader">{title}</ListSubheader>
              }
              className={classes.list}
            >
              {list
                .filter(({ forAdmin }) => forAdmin === isAdmin)
                .map(
                  (
                    { title, Icon, link, onClick, matches },
                    key,
                    { length }
                  ) => {
                    // is link active
                    const isActive = isMatched(_.defaultTo(matches, []));

                    // List item button
                    const Button = (
                      <ListItem
                        className={clsx(isActive && "active")}
                        {...(onClick ? { onClick } : {})}
                        button
                      >
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                        <ListItemText className="title">{title}</ListItemText>
                      </ListItem>
                    );

                    return (
                      <Fragment key={key}>
                        {link ? (
                          <Link
                            component={RouterLink}
                            onClick={onClose}
                            underline="none"
                            to={link}
                          >
                            {Button}
                          </Link>
                        ) : (
                          Button
                        )}
                        {key + 1 < length && <Divider />}
                      </Fragment>
                    );
                  }
                )}
            </List>

            {/* Refer friends */}
            {key === 0 && !isAdmin && <ReferFriend />}
          </Fragment>
        ))}

        {/* footer */}
        <SidebarFooter />
      </PerfectScrollbar>
    </Drawer>
  );
};

Sidebar.propTypes = {
  variant: propTypes.oneOf(["temporary", "permanent"]).isRequired,
  isAdmin: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  variant: "permanent",
  onClose: () => {},
  isAdmin: false,
  open: false,
};

export default memo(Sidebar);
