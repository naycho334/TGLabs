import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { lazy, memo } from "react";

import PlanAdditionalRequests from "./components/PlanAdditionalRequests";
import TrueGamingLabGames from "./TrueGamingLabGames";
import PlanRequests from "./components/PlanRequests";
import PlanHeader from "./components/PlanHeader";
import PlanOption from "./components/PlanOption";
import PublicPage from "components/PublicPage";
import PlanText from "./components/PlanText";
import PlanFees from "./components/PlanFees";
import OtherServices from "./OtherServices";
import GameDevSuite from "./GameDevSuite";
import HowItWorks from "./HowItWorks";
import WhiteLabel from "./WhiteLabel";
import Features from "./Features";
import Plans from "./Plans";
import About from "./About";
import TelegramBot from "./TelegramBot";

const HeaderSection = lazy(() => import("components/PublicPage/HeaderSection"));
const ExpressionOfInterest = lazy(() =>
  import("components/ExpressionOfInterest")
);
const Footer = lazy(() => import("components/Footer"));
const FAQ = lazy(() => import("components/FAQ"));

const conditions = [
  "Requests are consumed on POST requests. You can make unlimited GET requests.",
  "Client withdrawals are withdrawals made by you through your portal.",
];

const Services = () => {
  return (
    <PerfectScrollbar className="globalScrollbar">
      <PublicPage hasNavbar title="Services - TGLabs">
        <Container maxWidth="lg">
          <HeaderSection title="Services">
            <About />
            <HowItWorks />
          </HeaderSection>
          <Plans
            title="There are 3 levels of subscriptions available for True pay, each to suit your needs:"
            levels={3}
            components={[
              {
                title: "Monthly",
                alignTitle: "flex-end",
                component: PlanHeader,
                props: [
                  { className: "starter-plan", name: "Starter", price: 0 },
                  { className: "pro-plan", name: "Pro", price: 5 },
                  {
                    className: "entreprise-plan",
                    name: "Entreprise",
                    price: 15,
                  },
                ],
              },
              {
                title: "Requests*",
                component: PlanRequests,
                props: [{ number: 15 }, { number: 40 }, { number: 100 }],
              },
              {
                title: "Additional Requests",
                component: PlanAdditionalRequests,
                props: [
                  { price: 1, requests: 1 },
                  { price: 0.8, requests: null },
                  { price: 0.6, requests: null },
                ],
              },
              {
                title: "Fees",
                component: PlanFees,
                alignTitle: "flex-start",
                props: [
                  { deposits: "0", withdrawals: "1", client: "1" },
                  { deposits: "0", withdrawals: "0.8", client: "0.8" },
                  { deposits: "0", withdrawals: "0.65", client: "0.5" },
                ],
              },
              {
                title: "Swap Fee",
                component: PlanText,
                props: [
                  { text: "0.85%" },
                  { text: "0.65%" },
                  { text: "0.45%" },
                ],
              },
              {
                title: "Support Response",
                component: PlanText,
                props: [
                  { text: "Within 24 hours" },
                  { text: "Within 12 hours" },
                  { text: "Within 8 hours" },
                ],
              },
              {
                title: "Live Support",
                component: PlanOption,
                props: [{ available: false }, { available: false }],
              },
              {
                title: "Event Listeners",
                component: PlanOption,
                props: [],
              },
              {
                title: "Analytics",
                component: PlanOption,
                props: [],
              },
            ]}
            conditions={conditions}
          />
          <GameDevSuite />
          <Plans
            title="There are 3 levels of subscriptions available for Game Dev Suite, each to suit your needs:"
            levels={3}
            components={[
              {
                title: "Monthly",
                component: PlanHeader,
                alignTitle: "flex-end",
                props: [
                  { className: "starter-plan", name: "Starter", price: 0 },
                  { className: "pro-plan", name: "Pro", price: 6 },
                  {
                    className: "entreprise-plan",
                    name: "Entreprise",
                    price: 20,
                  },
                ],
              },
              {
                title: "Requests*",
                component: PlanRequests,
                props: [{ number: 25 }, { number: 70 }, { number: 150 }],
              },
              {
                title: "Additional Requests",
                component: PlanAdditionalRequests,
                props: [
                  { price: 0.8, requests: 1 },
                  { price: 0.6, requests: null },
                  { price: 0.45, requests: null },
                ],
              },
              {
                title: "Fees",
                component: PlanFees,
                alignTitle: "flex-start",
                props: [
                  { deposits: "0", withdrawals: "1", client: "1" },
                  { deposits: "0", withdrawals: "0.7", client: "0.8" },
                  { deposits: "0", withdrawals: "0.3", client: "0.4" },
                ],
              },
              {
                title: "User Chat/Rank /Daily Tasks",
                component: PlanOption,
                props: [{ available: false }],
              },
              {
                title: "Access To TG Lab Games",
                component: PlanOption,
                props: [{ available: false }],
              },
              {
                title: "Swap Fee",
                component: PlanText,
                props: [
                  { text: "0.85%" },
                  { text: "0.65%" },
                  { text: "0.45%" },
                ],
              },
              {
                title: "Support Response",
                component: PlanText,
                props: [
                  { text: "Within 24 hours" },
                  { text: "Within 12 hours" },
                  { text: "Within 8 hours" },
                ],
              },
              {
                title: "Live Support",
                component: PlanOption,
                props: [{ available: false }, { available: false }],
              },
              {
                title: "Event Listeners",
                component: PlanOption,
                props: [],
              },
              {
                title: "Analytics",
                component: PlanOption,
                props: [],
              },
            ]}
            conditions={conditions}
          />
          <Features />
          <OtherServices />
          <WhiteLabel />
          <TelegramBot />
          <TrueGamingLabGames />
          <FAQ />
          <ExpressionOfInterest />
        </Container>
        <Footer />
      </PublicPage>
    </PerfectScrollbar>
  );
};

export default memo(Services);
