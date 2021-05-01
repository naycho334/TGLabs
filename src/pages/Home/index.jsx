import { Container } from "@material-ui/core";
import { memo } from "react";

import ExpressionOfInterest from "./ExpressionOfInterest";
import Page from "../../components/PublicPage";
import Tokenomics from "./Tokenomics";
import HowITWorks from "./HowITWorks";
import Statistics from "./Statistics";
import StageOne from "./StageOne";
import About from "./About";
import TimeLine from "./TimeLine";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <Page hasNavbar title="Home - TGLabs">
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
    </Page>
  );
};

export default memo(Home);
