import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import { memo } from "react";
import clsx from "clsx";

import {
  FacebookIcon,
  TelegramIcon,
  DiscordIcon,
  TwitterIcon,
} from "../Icons/Social";
import useStyles from "./styles";

const socialLinks = [
  { Icon: FacebookIcon, href: "#" },
  { Icon: DiscordIcon, href: "#" },
  { Icon: TwitterIcon, href: "#" },
  { Icon: TelegramIcon, href: "#" },
];

const SidebarFooter = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.footer, className)}>
      <div className="links d-flex mb-3">
        {[
          { title: "Terms of Use", link: "#" },
          { title: "Privacy Policy", link: "#" },
        ].map(({ title, link }, key) => (
          <Link component={RouterLink} underline="none" to={link} key={key}>
            <Typography variant="caption" className="grey-text">
              {title}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="d-flex mb-3">
        {socialLinks.map(({ Icon, href }, key) => (
          <Link component={RouterLink} underline="none" to={href} key={key}>
            <Icon />
          </Link>
        ))}
      </div>
      <div>
        <Typography variant="caption" className="grey-text">
          © Copyright True Gaming Labs All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default memo(SidebarFooter);
