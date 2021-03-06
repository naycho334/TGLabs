import { colors, fade, lighten, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    // Header
    header: {
      "& .title": {
        color: theme.palette.lightBlue.main,
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        fontWeight: 'bold',
        maxWidth: 450,
        margin: 'auto',
      },

      "& .description": {
        color: colors.common.white,
        margin: 'auto',
        maxWidth: 1050,
        fontSize: 18
      },

      "& .question": {
        color: colors.common.white,
        position: 'relative',
      },

      "& .registerButton": {
        zIndex: 1
      },

      "& .animationContainer": {
        position: 'relative',
        height: 750,

        "& .animation": {
          margin: theme.spacing(-9, 0, 0, 0),
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: -1,
          left: 0,
          top: 0,

          "& svg": {
            transform: 'translate(-50%, 0)',
            position: 'absolute',
            left: '50%',
            top: 0,
          },
        },
      },
    },

    // Stage one
    stageOne: {
      backgroundColor: colors.common.white,
      marginBottom: theme.spacing(8),
      borderRadius: theme.spacing(2),
      marginTop: theme.spacing(-15),
      paddingTop: theme.spacing(4),
      position: 'relative',

      "& .progress": {
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(6),
      },

      "& .pinkBluredChip": {
        transform: 'translateY(-50%)',
        position: 'absolute',
        right: '17%',
        height: 220,
        top: 0,

        [theme.breakpoints.down("md")]: {
          transform: 'translateY(-50%)',
          right: '10%',
        },

        [theme.breakpoints.down("sm")]: {
          transform: 'translateY(-50%) scale(.6)',
          right: '-150px',
        },
      },
      "& .bluredLogo": {
        position: 'absolute',
        height: 150,
        left: '16%',
        top: '6%',

        [theme.breakpoints.down("sm")]: {
          display: 'none'
        }
      },
      "& .stageTitle": {
        color: theme.palette.purple.light,
        marginBottom: theme.spacing(3),
      },

      "& .stagesTimeline":{
        backgroundColor: theme.palette.yellow.light1,
        paddingTop: theme.spacing(6),
      },

      "& .calculatorContainer": {
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
      "& .outlinedInput": {
        border: `1px solid ${lighten(theme.palette.grey.border, .6)}`,
        backgroundColor: theme.palette.lightBlue.light,
        transition: 'all .3s',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 4,

        "& > div": {
          width: '100%'
        },

        "& .amount": {
          minHeight: "1.1876em",
          position: 'relative',
          minWidth: 100,
          width: '100%',

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
      "& .acceptedCurrenceis": {
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
    },

    // About
    about: {
      "& .ourMissionImage": {
        marginTop: theme.spacing(-16),
        maxWidth: "100%",
      },
      "& .feature": {
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

      "& .centerOnSmall": {
        [theme.breakpoints.down("sm")]: {
          flexDirection: 'column',
          alignItems: 'center'
        }
      }
    },

    // How it works
    howItWorks: {
      background: `linear-gradient(180deg, ${fade(theme.palette.purple.light1, .3)}, ${fade(theme.palette.purple.light, .3)})`,
      padding: theme.spacing(3, 4, 5, 4),
      marginBottom: theme.spacing(6),
      borderRadius: 30,

      "& .nextStep": {
        color: theme.palette.golden.main
      },

      "& .step": {
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

      [theme.breakpoints.down("md")]: {
        "& .step": {
          paddingBottom: 0,
          margin: 'auto',
          maxWidth: 400,

          "& h6":{
            fontSize: '1.1rem'
          }
        },

        "& .nextStep": {
          justifyContent: 'center',
          display: 'flex',
          padding: 0,

          "& svg": {
            transform: 'rotate(90deg)',
          }
        },
      }
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

      "& .profitGain": {
        [theme.breakpoints.down('sm')]: {
          "& > div": {
            marginBottom: 0
          },

          "& button": {
            display: 'none'
          },
        },
      },

      "& .profitDistribution": {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(5),

        "& svg": {
          display: 'none',

          [theme.breakpoints.down('sm')]: {
            "&:nth-child(1)": {
              display: 'block'
            },
          },

          [theme.breakpoints.up('md')]: {
            "&:nth-child(2)": {
              display: 'block',
              width: '100%',
            },
          },
        }
      },

      [theme.breakpoints.down("sm")]: {
        "& .benefitsOrder": {
          "& > div": {
            "&:nth-child(1)": {
              marginBottom: theme.spacing(4),
              order: 2,
            },

            "&:nth-child(2)": {
              order: 1,
              "& img": {
                margin: theme.spacing(-12, 'auto'),
                display: 'block'
              }
            },

            "&:nth-child(3)": {
              marginBottom: theme.spacing(4),
              order: 3
            },
          },
        },
      },

      "& .benefits": {
        marginBottom: theme.spacing(3),
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

        "& li": {
          fontSize: '.7rem',
        }
      },

      "& .percentageLine": {
        padding: theme.spacing(1, 0, 6.5, 0),
        marginBottom: theme.spacing(4),
        margin: 'auto',
        maxWidth: 550,

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
    },

    // Statistics
    statistics: {
      padding: theme.spacing(4, 0),
      position: 'relative',

      "&:before": {
        background: `linear-gradient(90deg, ${theme.palette.yellow.light}, ${theme.palette.orange.main})`,
        height: 'calc(100% + 150px)',
        position: 'absolute',
        content: '""',
        width: '100%',
        zIndex: -1,
        bottom: 0,
        left: 0,
      },

      "& .card": {
        borderBottom: `1px solid ${theme.palette.purple.light}`,

        "&:last-child": {
          borderBottom: 0,
        },

        [theme.breakpoints.down("sm")]: {
          "&:first-child": {
            paddingBottom: theme.spacing(1.75),
          },
          "&:not(:first-child)": {
            paddingBottom: theme.spacing(1.75),
            paddingTop: theme.spacing(1.75),
          },
          "&:last-child": {
            paddingBottom: 0,
          },
        },

        [theme.breakpoints.up("md")]: {
          borderBottom: 0
        },

        "& .value": {
          marginRight: theme.spacing(1),
        },
      }
    },

    // Timeline
    timeline: {
      backgroundColor: fade(theme.palette.common.white, .04),
      padding: theme.spacing(6, 0),
      overflow: 'hidden',
      minHeight: 800,

      "& > div": {
        position: 'relative',
      },

      "& .floatingBlurredCoin": {
        transform: 'translateX(-40%)',
        position: 'absolute',
        top: '60%',
        left: 0,

        [theme.breakpoints.down("md")]: {
          display: 'none'
        }
      },

      "& .hideOnDesktop": {
        [theme.breakpoints.up("lg")]: {
          display: 'none'
        }
      },

      "& .years_tab": {
        justifyContent: 'center',
        display: 'flex',
        minHeight: 42,

        "& .MuiTabs-scroller": {
          border: `1px solid ${theme.palette.grey.border}`,
          overflow: 'hidden',
          borderRadius: 30,
          width: 'unset',
          flex: 'none',

          "& button": {
            color: theme.palette.common.white,
            transition: 'all .3s',
            minHeight: 42,
            minWidth: 95,

            "&.Mui-selected": {
              color: theme.palette.purple.main,
            },
          },
        },
      },

      "& .map": {
        transform: 'translate(-50%, 0)',
        position: 'absolute',
        maxWidth: '100%',
        display: 'block',
        margin: 'auto',
        minWidth: 1000,
        left: '50%',
        top: 45
      },

      "& .tabIndicator": {
        backgroundColor: theme.palette.grey.border,
        borderRadius: 30,
        height: '100%',
        zIndex: -1,
      },

      "& .stepper_container": {
        marginTop: theme.spacing(8),

        "& .gutters": {
          position: 'relative',

          [theme.breakpoints.down("md")]: {
            margin: theme.spacing(0, 2),
          },
          [theme.breakpoints.up("lg")]: {
            margin: theme.spacing(0, 8),
          },
        },

        "& .stepper": {
          background: `linear-gradient(90deg, transparent, ${theme.palette.lightBlue.dark}, ${theme.palette.lightBlue.dark}, transparent)`,
          position: 'relative',
          width: '100%',
          height: 10,

          "& .step_icon": {
            transform: 'translate(-50%, -35%)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            borderRadius: 28,
            display: 'flex',
            top: '50%',
            height: 28,
            width: 28,

            ...(Array(4).fill(1).map((e, i) => ({
              [`&:nth-child(${i + 1})`]: {
                [theme.breakpoints.down("md")]: {
                  left: `calc(${i / 2 * 100}%)`
                },
                [theme.breakpoints.up("lg")]: {
                  left: `calc(${i / 3 * 100}%)`
                },
              }
            })).reduce((p, n) => ({ ...p, ...n }), {})),

            "&.completed": {
              backgroundColor: theme.palette.lightBlue.dark,
            },

            "&.pending": {
              backgroundColor: theme.palette.yellow.light,
            },

            "&.currently": {
              backgroundColor: lighten(theme.palette.orange.main, .3),

              "&:after": {
                color: lighten(theme.palette.orange.main, .3),
                transform: 'translate(0, -120%)',
                textTransform: 'uppercase',
                content: '"Currently"',
                position: 'absolute',
                fontSize: '.7rem',
                top: 0,
              },

              "&:before": {
                border: `.1px solid ${fade(lighten(theme.palette.orange.main, .3), .2)}`,
                position: 'absolute',
                borderRadius: 200,
                content: '""',
                height: 200,
                width: 200,
              },
            },

            "& svg": {
              fontSize: '1.1rem',
            },
          },
        },

        "& .step": {
          marginLeft: theme.spacing(-1.5),
          marginTop: theme.spacing(2),
          width: '30%',

          [theme.breakpoints.down("md")]: {
            "&:not(.currently)": {
              display: 'none',
            },
            "&.currently": {
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              marginLeft: 0,

              "& span, & p": {
                textAlign: 'center',
                display: 'block',
                margin: 'auto'
              }
            },
            "&:not(.active)": {
              display: 'none'
            },
            "& ul": {
              display: 'none'
            }
          },

        },
      },
      "& ul": {
        listStyle: 'none',
        paddingLeft: 0,
        margin: 0,

        "& ul": {
          paddingLeft: theme.spacing(3),
          margin: theme.spacing(.5, 0),
        },

        "& li": {
          marginBottom: theme.spacing(.1),
          alignItems: 'center',
          display: 'flex',

          "& svg": {
            marginRight: theme.spacing(1),
            fontSize: '1rem',
          }
        },
      },
    },
  }
})

export default useStyles;