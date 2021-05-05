import { Typography } from "@material-ui/core";
import { lazy, memo } from "react";
import clsx from "clsx";

import useStyles from "./styles";

const HeaderSection = lazy(() =>
  import("../../components/PublicPage/HeaderSection")
);

const Header = () => {
  const classes = useStyles();

  return (
    <HeaderSection title="ICO Informations">
      <Typography
        className={clsx("white-text", classes.description)}
        align="center"
      >
        <strong>TrueGaming Labs</strong> will hold an ICO to raise funds for
        development and give investors an excellent opportunity to back our
        project.
      </Typography>
    </HeaderSection>
  );
};

export default memo(Header);
