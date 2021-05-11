import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { lazy, memo } from "react";

import PublicPage from "components/PublicPage";
import TokenDistribution from "./TokenDistribution";
import FundAllocation from "./FundAllocation";
import TokenSupply from "./TokenSupply";
import Referrals from "./Referrals";
import Header from "./Header";

const ExpressionOfInterest = lazy(() =>
  import("components/ExpressionOfInterest")
);
const Footer = lazy(() => import("components/Footer"));
const FAQ = lazy(() => import("components/FAQ"));

const ICOInformations = () => {
  return (
    <PerfectScrollbar className="globalScrollbar">
      <PublicPage hasNavbar title="ICO Informations - TGLabs">
        <Container maxWidth="lg">
          <Header />
          <TokenSupply />
          <TokenDistribution />
          <Referrals />
          <FundAllocation />
          <FAQ />
          <ExpressionOfInterest />
        </Container>
        <Footer />
      </PublicPage>
    </PerfectScrollbar>
  );
};

export default memo(ICOInformations);
