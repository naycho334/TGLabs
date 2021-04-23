import { Container } from "@material-ui/core";

import Page from "../../components/PublicPage/Page";
import Tokenomics from "./Tokenomics";
import HowITWorks from "./HowITWorks";
import StageOne from "./StageOne";
import Overview from "./Overview";
import TabTable from "./TabTable";
import Header from "./Header";

const Home = () => {
  return (
    <Page hasNavbar title="Home - TGLabs">
      <Container maxWidth="lg">
        <Header />
        <StageOne />
        <Overview />
        <HowITWorks />
        <Tokenomics />
        <TabTable />
      </Container>
    </Page>
  );
};

export default Home;
