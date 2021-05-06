import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import { memo } from "react";

import { ReactComponent as InstagramIcon } from "../../assets/svgs/social/instagram-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svgs/social/linked-in-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svgs/social/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svgs/social/twitter-icon.svg";

const socialLinks = [
  { Icon: FacebookIcon, href: "#" },
  { Icon: InstagramIcon, href: "#" },
  { Icon: TwitterIcon, href: "#" },
  { Icon: LinkedInIcon, href: "#" },
];

const SidebarFooter = () => {
  return (
    <div className="footer">
      <div className="d-flex mb-3">
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
