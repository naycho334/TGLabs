import {
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItem,
  Toolbar,
  Divider,
  AppBar,
  Drawer,
  Hidden,
  List,
  Link,
} from "@material-ui/core";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { memo, Fragment, lazy, useContext } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";

import SidebarFooter from "./SidebarFooter";
import TGLogo from "../Animations/TGLogo";
import DashboardContext from "./context";
import { endpoints } from "routes";
import useStyles from "./styles";
import {
  FAQIcon,
  RewardsInformationIcon,
  ICOInformationIcon,
  ICODashboardIcon,
  TransactionsIcon,
  ReferralsIcon,
  ProductsIcon,
  WithdrawIcon,
  SettingsIcon,
  SupportIcon,
  RewardsIcon,
  LogoutIcon,
  UserIcon,
} from "../Icons/Icons";

const ReferFriend = lazy(() => import("./ReferFriend"));

const links = {
  menu: [
    // Admin links
    {
      title: "ICO Information",
      Icon: ICOInformationIcon,
      forAdmin: true,
      link: endpoints.dashboard.admin.ico_information.index,
      matches: [
        endpoints.dashboard.admin.ico_information.index,
        endpoints.dashboard.admin.home.index,
      ],
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
      matches: [
        endpoints.dashboard.admin.users.index,
        endpoints.dashboard.admin.user.index,
      ],
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
      matches: [
        endpoints.dashboard.user.ico_dashboard.index,
        endpoints.dashboard.user.home.index,
      ],
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
  const { isAdmin } = useContext(DashboardContext);
  const { variant, open, onClose } = props;
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
        <Hidden smDown>
          <SidebarFooter />
        </Hidden>
      </PerfectScrollbar>
    </Drawer>
  );
};

Sidebar.propTypes = {
  variant: propTypes.oneOf(["temporary", "permanent"]).isRequired,
  onClose: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  variant: "permanent",
  onClose: () => {},
  open: false,
};

export default memo(Sidebar);
