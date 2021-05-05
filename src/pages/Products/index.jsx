import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { lazy, memo } from "react";

import PublicPage from "../../components/PublicPage";
import useStyles from "./styles";

const HeaderSection = lazy(() =>
  import("../../components/PublicPage/HeaderSection")
);
const ExpressionOfInterest = lazy(() =>
  import("../../components/ExpressionOfInterest")
);
const Footer = lazy(() => import("../../components/Footer"));
const FAQ = lazy(() => import("../../components/FAQ"));

const Products = () => {
  const classes = useStyles();

  return (
    <PerfectScrollbar className="globalScrollbar">
      <PublicPage hasNavbar title="Products - TGLabs">
        <Container maxWidth="lg">
          <HeaderSection title="Products" />
          <FAQ />
          <ExpressionOfInterest />
        </Container>
        <Footer />
      </PublicPage>
    </PerfectScrollbar>
  );
};

export default memo(Products);
