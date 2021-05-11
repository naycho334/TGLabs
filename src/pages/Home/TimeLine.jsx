import { Container, Tab, Tabs } from "@material-ui/core";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import { timelineProgress } from "lib/helpers";
import Stepper from "./timeline/Stepper";
import useStyles from "./styles";

import { ReactComponent as MapWorldDotted } from "assets/svgs/map_world-dotted.svg";

import CoinBlurred from "assets/pngs/coin.png";

const steps = [
  {
    label: "Q1",
    year: 2021,
    status: "completed",
    list: ["R&D", "Early stage development"],
  },
  {
    label: "Q2",
    year: 2021,
    status: "currently",
    list: [
      "R&D",
      "Early stage development",
      "Release beta platform for testing",
      "Launch ICO",
    ],
  },
  {
    label: "Q3",
    year: 2021,
    status: "pending",
    list: [
      "Finalise Admin Dashboard features",
      "Start Webpage designs for client user",
      "R&D PvP Game development ideas",
      "Development",
      [
        "Final infrastructure",
        "Games",
        "Additional Features",
        "New Currency Integrations",
      ],
      "Release Live Showcase Platform (TrueGaming)",
      [
        "Integrate games and features",
        "Test user experiences",
        "Test new features",
      ],
      "Marketing Campaign",
      "Scout new clients",
      "Launch first Client platforms (indicative)",
    ],
  },
  {
    label: "",
    year: "",
    status: "pending",
    list: [],
  },
];

const TimeLine = () => {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();

  const handleChange = (event, newValue) => {};

  return (
    <div className={classes.timeline} id="timeline">
      <Container>
        {/* Title */}
        <LightBlueTypography
          className="normal underline underlineCenter"
          align="center"
          variant="h6"
        >
          Timeline
        </LightBlueTypography>

        {/* Tabs */}
        <Tabs
          TabIndicatorProps={{ className: "tabIndicator" }}
          onChange={handleChange}
          className="years_tab"
          value={currentYear}
          centered
        >
          {[2020, 2021, 2022].map((year) => (
            <Tab disableRipple label={year} key={year} value={year} />
          ))}
        </Tabs>

        {/* Floating coin */}
        <img
          className="floatingBlurredCoin"
          alt="blurred coin"
          src={CoinBlurred}
        />

        {/* Map */}
        <MapWorldDotted className="map" />

        {/* Stepper */}
        <Stepper steps={timelineProgress(steps)} />
      </Container>
    </div>
  );
};

export default TimeLine;
