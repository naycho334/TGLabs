import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { lazy, memo } from "react";

import PublicPage from "components/PublicPage";
import Tokenomics from "./Tokenomics";
import HowITWorks from "./HowITWorks";
import Statistics from "./Statistics";
import StageOne from "./StageOne";
import TimeLine from "./TimeLine";
import Header from "./Header";
import About from "./About";

const ExpressionOfInterest = lazy(() =>
  import("components/ExpressionOfInterest")
);
const Footer = lazy(() => import("components/Footer"));
const FAQ = lazy(() => import("components/FAQ"));

const Home = () => {
  return (
    <PerfectScrollbar className="globalScrollbar">
      <PublicPage hasNavbar title="Home - TGLabs">
        <Container maxWidth="lg">
          <Header />
          <StageOne />
          <About />
          <HowITWorks />
          <Tokenomics />
        </Container>
        <Statistics />
        <TimeLine />
        <Container maxWidth="lg">
          <FAQ />
          <ExpressionOfInterest />
        </Container>
        <Footer />
      </PublicPage>
    </PerfectScrollbar>
  );
};

export default memo(Home);
