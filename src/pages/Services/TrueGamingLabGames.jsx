import { Box, Grid, Typography, useTheme } from "@material-ui/core";
import { memo, useEffect, useRef } from "react";
import { Remove } from "@material-ui/icons";
import Masonry from "masonry-layout";
import clsx from "clsx";
import _ from "lodash";

import SliderRouletteAnimation from "components/Animations/SliderRouletteAnimation";
import BlackJackLiveAnimation from "components/Animations/BlackJackLiveAnimation";
import RouletteLiveAnimation from "components/Animations/RouletteLiveAnimation";
import DiceUltimateAnimation from "components/Animations/DiceUltimateAnimation";
import DiceClassicAnimation from "components/Animations/DiceClassicAnimation";
import CaraYCruzAnimation from "components/Animations/CaraYCruzAnimation";
import BlackJackAnimation from "components/Animations/BlackJackAnimation";
import BaraccatAnimation from "components/Animations/BaraccatAnimation";
import RouletteAnimation from "components/Animations/RouletteAnimation";
import DiceProAnimation from "components/Animations/DiceProAnimation";
import PockerAnimation from "components/Animations/PockerAnimation";
import SnakesAnimation from "components/Animations/SnakesAnimation";
import TowerAnimation from "components/Animations/TowerAnimation";
import PlinkAnimation from "components/Animations/PlinkAnimation";
import WheelAnimation from "components/Animations/WheelAnimation";
import MinesAnimation from "components/Animations/MinesAnimation";
import BlastAnimation from "components/Animations/BlastAnimation";
import CrashAnimation from "components/Animations/CrashAnimation";
import SicBoAnimation from "components/Animations/SicBoAnimation";
import KenoAnimation from "components/Animations/KenoAnimation";
import HiloAnimation from "components/Animations/HiloAnimation";
import FlipAnimation from "components/Animations/FlipAnimation";
import RingAnimation from "components/Animations/RingAnimation";
import SicBoOnDemand from "components/Animations/SicBoOnDemand";
import BragAnimation from "components/Animations/BragAnimation";
import RouletteBingo from "components/Animations/RouletteBingo";

import GoldenGradientButton from "components/Buttons/GoldenGradientButton";
import { CheckedOutlineIcon } from "components/Icons/Icons";
import { InProgressIcon } from "components/Icons/Icons";
import useForceUpdate from "hooks/useForceUpdate";
import useStyles from "./styles";

const games = [
  {
    title: "Dice – A classic dice Dapp.",
    complete: true,
    animation: DiceClassicAnimation,
    rules: ["Users choose a number between 0 – 99", "1 – 2.5% house edge"],
  },
  {
    title: "Dice Pro",
    complete: true,
    animation: DiceProAnimation,
    rules: [
      "Users choose a number between 0.00 and 99.99",
      "1-2.5% house edge",
      "Can add additional features such as side bets (additional costs involved)",
    ],
  },
  {
    title: "Dice Ultimate",
    complete: false,
    animation: DiceUltimateAnimation,
    rules: [
      "Users can make Range wager",
      "Additional Side Bets (e.g odd/even, high/low)",
      "1-2.5% house edge",
    ],
  },
  {
    title: "Crash (LIVE)",
    complete: false,
    animation: CrashAnimation,
    rules: ["Generates a multiplier between 1 and 999999"],
  },
  {
    title: "Blast",
    complete: false,
    animation: BlastAnimation,
    rules: ["Same as Crash but on demand for the user"],
  },
  {
    title: "Ring (Live)",
    complete: true,
    animation: RingAnimation,
    rules: ["User chooses a colour on the ring to win"],
  },
  {
    title: "Wheel",
    complete: false,
    animation: WheelAnimation,
    rules: [
      "Same as Ring but on demand for the user",
      "User can change the number of items on the ring and difficulty level.",
    ],
  },
  {
    title: "Keno",
    complete: false,
    animation: KenoAnimation,
    rules: [
      "User can choose between 1 - 10 numbers on a 42 number board to win",
    ],
  },
  {
    title: "Mines",
    complete: false,
    animation: MinesAnimation,
    rules: ["Select boxes that don’t contain mines to win!"],
  },
  {
    title: "Snakes and Ladders",
    complete: false,
    animation: SnakesAnimation,
    rules: [
      "Find the ladder to climb levels and increase your multiplier",
      "Snakes end the user’s game",
    ],
  },
  {
    title: "Tower",
    complete: false,
    animation: TowerAnimation,
    rules: ["Open the right door to get higher up the tower"],
  },
  {
    title: "Plinko",
    complete: false,
    animation: PlinkAnimation,
    rules: ["Watch the balls fall into pockets"],
  },
  {
    title: "Hi-Lo",
    complete: false,
    animation: HiloAnimation,
    rules: ["Will your next card be higher or lower?"],
  },
  {
    title: "Flip",
    complete: false,
    animation: FlipAnimation,
    rules: ["Choose between heads and tails"],
  },
  {
    title: "Cara-Y-Cruz",
    complete: false,
    animation: CaraYCruzAnimation,
    rules: ["3 coin flip game"],
  },
  {
    title: "Baraccat",
    complete: false,
    animation: BaraccatAnimation,
    rules: ["An entertaining card game"],
  },
  {
    title: "Sic Bo (Live)",
    complete: false,
    animation: SicBoAnimation,
    rules: ["A 3 dice Table game"],
  },
  {
    title: "Sic Bo (on demand)",
    complete: false,
    animation: SicBoOnDemand,
    rules: [],
  },
  {
    title: "Brag (3 card poker) / Video poker",
    complete: false,
    animation: BragAnimation,
    rules: [],
  },
  {
    title: "Roulette Bingo (Live)",
    complete: false,
    animation: RouletteBingo,
    rules: [
      "Purchase your card",
      "Wait for the 15 spins and match your cards!",
    ],
  },
  {
    title: "Blackjack ",
    complete: false,
    animation: BlackJackAnimation,
    rules: ["A simple game of blackjack"],
  },
  {
    title: "Blackjack (Live)",
    complete: false,
    animation: BlackJackLiveAnimation,
    rules: [
      "Play live blackjack with other players!",
      "Up to 8 hands played at the same time.",
    ],
  },
  {
    title: "Roulette",
    complete: false,
    animation: RouletteAnimation,
    rules: ["Place your chips and spin the roulette wheel!"],
  },
  {
    title: "Roulette (Live)",
    complete: false,
    animation: RouletteLiveAnimation,
    rules: ["Play roulette with other players!"],
  },
  {
    title: "Slider Roulette",
    complete: false,
    animation: SliderRouletteAnimation,
    rules: ["Roulette with a twist"],
  },
  {
    title: "Poker (Live)",
    complete: false,
    animation: PockerAnimation,
    rules: ["Vs other players in a game of poker"],
  },
];

let gamesMasonry, timer;

const TrueGamingLabGames = () => {
  const forceUpdate = useForceUpdate();
  const classes = useStyles();
  const gridRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    const { current: grid } = gridRef;
    if (grid) {
      gamesMasonry = new Masonry(grid, {
        gutter: theme.spacing(3),
        itemSelector: ".game",
      });

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        if (_.lte(grid.offsetHeight, 0)) forceUpdate();
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gridRef, theme, forceUpdate]);

  return (
    <Grid container spacing={3} className={classes.trueGamingLabGames}>
      <Grid item xs={12}>
        <Typography className="white-text bold">
          TrueGaming Lab Games{" "}
          <span className="gamesCount">{games.length}</span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className="container" ref={gridRef}>
          {games.map(({ animation: Animation, ...game }, index) => (
            <div className="game" key={index}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={clsx("status", game.complete && "complete")}
                    variant="overline"
                    component="div"
                  >
                    <span>{game.complete ? "Complete" : "In Progress"}</span>
                    {game.complete ? (
                      <CheckedOutlineIcon />
                    ) : (
                      <InProgressIcon />
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="animation">
                  {Animation && <Animation />}
                </Grid>
                <Grid item xs={12}>
                  <Typography className="white-text">{game.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <ul className="list">
                    {game.rules.map((rule, key) => (
                      <Typography
                        className="white-text"
                        variant="subtitle2"
                        component="li"
                        key={key}
                      >
                        <Box display="flex">
                          <Remove />
                          <span>{rule}</span>
                        </Box>
                      </Typography>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12}>
        <GoldenGradientButton
          className="uppercase viewMoreButton"
          variant="contained"
          disableElevation
        >
          View More
        </GoldenGradientButton>
      </Grid>
    </Grid>
  );
};

export default memo(TrueGamingLabGames);
