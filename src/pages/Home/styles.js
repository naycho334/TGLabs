import { colors, darken, fade, lighten, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    // Header
    title: {
      color: theme.palette.lightBlue.main,
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      fontWeight: 'bold',
      maxWidth: 450,
      margin: 'auto',
    },
    description: {
      color: colors.common.white,
      margin: 'auto',
      maxWidth: 1050,
      fontSize: 18
    },
    question: {
      color: colors.common.white,
      position: 'relative',
    },
    registerButton: {
      zIndex: 1
    },

    // Stage one
    stageOne: {
      backgroundColor: colors.common.white,
      marginBottom: theme.spacing(8),
      borderRadius: theme.spacing(2),
      marginTop: theme.spacing(-15),
      paddingTop: theme.spacing(4),
      position: 'relative',

      "& .pinkBluredChip": {
        transform: 'translateY(-50%)',
        position: 'absolute',
        right: '17%',
        height: 220,
        top: 0,
      },

      "& .bluredLogo": {
        position: 'absolute',
        height: 150,
        left: '16%',
        top: '6%',
      },
    },
    stageTitle: {
      color: theme.palette.purple.light,
      marginBottom: theme.spacing(3),
    },
    countdownContainer: {
      marginBottom: theme.spacing(3),
      justifyContent: 'center',
      display: 'flex',
    },
    countdown: {
      position: 'relative',
      width: 'unset'
    },
    timeBox: {
      border: `2px solid ${theme.palette.grey.border}`,
      borderRadius: theme.spacing(1),
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
      height: 75,
      width: 75,

      "& .value": {
        color: theme.palette.lightBlue.dark,
        lineHeight: '2.125rem',

        "&.seconds": {
          fontWeight: 'bold'
        }
      },

      "& .label": {
        color: darken(theme.palette.grey.border, .4),
        lineHeight: '0.7rem',
        fontSize: '0.7rem',
      },
    },
    countEnds: {
      color: theme.palette.orange.main,
      transform: 'translateX(-100%)',
      position: 'absolute',
      left: 0
    },

    // Progress bar
    progressBarContainer: {
      padding: theme.spacing(6, 8, 4, 6),
      marginBottom: theme.spacing(3),
    },
    progressBar: {
      backgroundColor: colors.grey[200],
      position: 'relative',
      borderRadius: 30,
      width: "100%",
      padding: 6,
      height: 40,

      "& > div": {
        color: colors.common.white,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 30,
        display: 'flex',
        height: '100%',
        width: '100%',
      },

      "&:before, &:after": {
        color: colors.grey[400],
        position: 'absolute',
        content: '""',
        top: -25,
      },

      "&:before": {
        content: '"0%"',
        left: 5,
      },

      "&:after": {
        content: '"100%"',
        right: 5,
      },
    },
    progress: {
      background: `linear-gradient(90deg, ${theme.palette.purple.light1}, ${theme.palette.purple.light})`,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: 30,
      display: 'flex',
      width: '100%',
      bottom: 0,
      left: 0,
      top: 0,
    },
    progressValue: {
      transform: 'translateX(-50%)',
      position: "relative",
    },
    target: {
      justifyContent: 'space-between',
      transform: 'translateX(-50%)',
      height: theme.spacing(13),
      flexDirection: 'column',
      top: theme.spacing(-4),
      position: 'absolute',
      textAlign: 'center',
      display: 'flex',

      "& span:first-child": {
        color: theme.palette.purple.main
      },

      "& span:last-child": {
        color: colors.grey[500]
      },

      "&:after": {
        backgroundColor: theme.palette.grey.border,
        transform: 'translateX(-50%)',
        height: theme.spacing(7),
        top: theme.spacing(3),
        position: 'absolute',
        content: '""',
        left: '50%',
        width: 3,
      }
    },

    // Discounts
    discountsContainer: {
      backgroundColor: theme.palette.yellow.light1,
      padding: theme.spacing(6, 8, 0, 6),
    },
    line: {
      background: `linear-gradient(-90deg, ${theme.palette.lightBlue.main}, ${theme.palette.yellow.light})`,
      borderRadius: 15,
      width: '100%',
      height: 15,
    },
    discounts: {
      position: 'relative'
    },
    discount: {
      justifyContent: 'space-between',
      height: theme.spacing(8),
      flexDirection: 'column',
      top: theme.spacing(-3),
      position: 'absolute',
      display: 'flex',

      "& span": {
        marginLeft: 30
      },

      "& span:last-child": {
        color: theme.palette.purple.light
      },

      "&:before": {
        border: `4px solid ${theme.palette.purple.light}`,
        transform: 'translateY(-50%)',
        position: 'absolute',
        borderRadius: 15,
        content: '""',
        height: 30,
        top: '50%',
        width: 30,
        left: 0,
      },

      "&:nth-child(2)": {
        "& span": {
          marginLeft: 0
        },

        "&:before": {
          visibility: 'hidden'
        },
      },
    },

    // Calculator
    calculatorContainer: {
      backgroundColor: theme.palette.yellow.light1,
      padding: theme.spacing(6, 8, 3, 8),
      marginBottom: theme.spacing(2),

      "& .equal": {
        color: theme.palette.lightBlue.main
      },

      "& .result": {
        backgroundColor: theme.palette.yellow.light,
        padding: theme.spacing(1, 2),
        borderRadius: 20,
        color: theme.palette.purple.light
      },
    },
    outlinedInput: {
      border: `1px solid ${lighten(theme.palette.grey.border, .6)}`,
      backgroundColor: theme.palette.lightBlue.light,
      transition: 'all .3s',
      alignItems: 'center',
      display: 'flex',
      borderRadius: 4,

      "& .amount": {
        minHeight: "1.1876em",
        position: 'relative',
        width: 100,

        "& input": {
          padding: theme.spacing(1.25, 3, 1.25, 1.25),
          fontSize: '0.875rem'
        }
      },
      "& .select": {
        "&:before": {
          backgroundColor: theme.palette.grey.border,
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          height: '50%',
          content: '""',
          top: '50%',
          left: 0,
          width: 2
        }
      },
      "&.focus": {
        border: `1px solid ${theme.palette.lightBlue.dark}`
      },
    },

    // Accepted currencies
    acceptedCurrenceis: {
      padding: theme.spacing(0, 8, 3, 8),
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',

      "& svg": {
        marginTop: theme.spacing(1.5),
        height: 25,
        a: theme.direction
      }
    },

    // Overview
    ourMissionImage: {
      marginTop: theme.spacing(-16)
    },
    feature: {
      "& svg": {
        height: 60,
        width: 60,
      },
      "& p": {
        color: theme.palette.golden.main,
        lineHeight: '1.25rem',
        fontSize: '0.9rem',
      }
    },

    // How it works
    howItWorks: {
      background: `linear-gradient(180deg, ${fade(theme.palette.purple.light1, .3)}, ${fade(theme.palette.purple.light, .3)})`,
      borderRadius: 30,
    },
    step: {
      "& .step-icon": {
        height: 45,
        width: 45,
      },


      "& .number": {
        position: 'relative',
        height: 65,
        width: 65,

        "& svg": {
          height: 65,
          width: 65,
        },

        "& span": {
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          fontWeight: 'bold',
          left: '50%',
          top: '50%',
        },
      },
    },
    nextStep: {
      color: theme.palette.golden.main
    },

    // Token supply
    tokenomics: {
      position: 'relative',

      "& .bluredDice": {
        position: 'absolute',
        height: 216,
        right: 58,
        top: -16,
      },

      "& .benefits": {
        listStyle: 'none',
        paddingLeft: 0,

        "& li": {
          display: 'flex',

          "& svg": {
            marginRight: theme.spacing(1),
            transform: 'translateY(-10%)',
            width: 15,
          },

          ...([
            "#138BBD",
            "#2AF6FF",
            "#FFB993",
            "#FEECA8",
            "#6D51F3",
            "#6B24D6",
            "#F48A5B"
          ].map((color, i) => ({
            [`&:nth-child(${i + 1}) svg`]: { color },
          })).reduce((p, n) => ({ ...p, ...n }), {}))
        },
      },

      "& .conditions": {
        listStyle: 'none',
        paddingLeft: 0,
        
        "& li":{
          fontSize: '.7rem',
        }
      },
    },
    percentageLine: {
      padding: theme.spacing(1, 0, 6.5, 0),
      marginBottom: theme.spacing(4),
      margin: 'auto',
      width: 550,

      "& .bar": {
        height: 13,

        "& div:first-child": {
          backgroundColor: theme.palette.purple.light,
          borderBottomLeftRadius: 13,
          borderTopLeftRadius: 13,
          position: 'relative',

          "&:after": {
            borderRight: `2px solid ${theme.palette.purple.main}`,
            borderLeft: `2px solid ${theme.palette.purple.main}`,
            transform: 'translateX(50%)',
            boxSizing: 'content-box',
            backgroundColor: '#FFF',
            top: theme.spacing(-1),
            position: 'absolute',
            content: '""',
            height: 80,
            right: 0,
            width: 2,
          }
        },
        "& div:last-child": {
          backgroundColor: theme.palette.yellow.light,
          borderBottomRightRadius: 13,
          borderTopRightRadius: 13,
        },
      },

      "& .value": {
        position: 'absolute',
      }
    },

    // Tab table
    tabTable:{
      backgroundColor: theme.palette.common.white,
      borderRadius: 15
    }
  }
})

export default useStyles;