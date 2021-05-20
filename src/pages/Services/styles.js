import { darken, fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    about: {
      "& .truePayLogo": {
        width: 195,

        [theme.breakpoints.down('md')]: {
          display: 'block',
          margin: 'auto',
        }
      },

      "& .text": {
        [theme.breakpoints.down('md')]: {
          textAlign: 'center'
        },
      },
      "& .illustration": {
        marginBottom: -115,
        marginTop: -110,
        display: 'block',
        margin: 'auto',
        width: 400,

        [theme.breakpoints.down('md')]: {
          margin: theme.spacing(-5, 'auto', 2, 'auto'),
          maxWidth: '100%',
        }
      },
    },

    howItWorks: {
      background: `linear-gradient(180deg, ${fade(theme.palette.purple.light1, .3)}, ${fade(theme.palette.purple.light, .3)})`,
      padding: theme.spacing(4, 3),
      borderRadius: 13,

      '& .title': {
        [theme.breakpoints.down("md")]: {
          textAlign: 'center'
        }
      },

      '& .text': {
        [theme.breakpoints.down("md")]: {
          textAlign: 'center'
        }
      },

      "& .currenciesTitle": {
        paddingBottom: 0
      },

      "& .currencies": {
        [theme.breakpoints.down("md")]: {
          "& *": {
            paddingBottom: 0
          }
        },
        "& svg": {
          width: 20
        },
      },
    },

    plans: {
      marginBottom: theme.spacing(5),

      "& .titles": {
        padding: theme.spacing(5, 0, 1, 0),

        "& .feature-title": {
          position: 'relative',
          display: "flex",
          height: "100%",

          "&:after": {
            backgroundColor: fade(theme.palette.purple.light1, .2),
            position: 'absolute',
            content: '""',
            width: 1232,
            height: 1,
            bottom: 0,
          },

          "&.last-one:after": {
            display: 'none'
          }
        },
      },

      "& .tabs": {
        margin: theme.spacing(0, -3),
        position: 'relative',

        "&:after": {
          backgroundColor: fade('#FFF', 0.2),
          position: 'absolute',
          content: '""',
          width: '100%',
          height: 1,
          bottom: 0,
          zIndex: -1
        },

        "& .MuiTabs-indicator": {
          backgroundColor: darken(theme.palette.lightBlue.dark, .1),
          transform: 'scaleX(.5)',
          height: 3,
        },

        "& button": {
          color: '#FFF',
          opacity: 1,

          "&.Mui-selected": {
            "&.starter-plan": {
              color: theme.palette.orange.main,
            },

            "&.pro-plan": {
              color: theme.palette.purple.light1,
            },

            "&.entreprise-plan": {
              color: theme.palette.lightBlue.dark,
            },
          },
        },
      },

      "& .plan-tab": {
        [theme.breakpoints.down("md")]: {
          display: 'none',

          "&.active-tab": {
            display: 'block'
          },
        }
      },

      "& .plan": {
        padding: theme.spacing(5, 0, 1, 0),
        backgroundColor: "#FFF",
        borderRadius: 10,
        width: 280,

        "& .plan-feature": {
          padding: theme.spacing(1, 3),

          "&:nth-child(1)": {
            paddingBottom: theme.spacing(1.5),
          },

          [theme.breakpoints.down("md")]: {
            borderBottomColor: fade(theme.palette.purple.light1, .2),
            borderBottom: `1px solid`,

            "&:last-child": {
              borderBottom: 0
            }
          },
        },

        [theme.breakpoints.down("md")]: {
          width: '100%',
        },

        "& .plan-option": {
          color: '#8F96A5',

          "& svg": {
            display: 'block',
            margin: 'auto',

            '& g': {
              stroke: theme.palette.orange.main
            },
            '& line': {
              stroke: theme.palette.orange.main
            },
          },

          "&.available": {
            '& svg circle': {
              stroke: theme.palette.lightBlue.main
            },
            '& svg path': {
              stroke: theme.palette.lightBlue.main
            },
          },
        },

        "& .plan-text, & .plan-requests, & .plan-additional-requests": {
          color: '#8F96A5'
        },

        "& .plan-additional-requests": {
          "& svg": {
            width: 20,
          }
        },

        "& .starter-plan .title": {
          color: theme.palette.orange.main,
        },

        "& .pro-plan .title": {
          color: theme.palette.purple.light1,
        },

        "& .entreprise-plan .title": {
          color: theme.palette.lightBlue.dark,
        },

        "& .title": {
          marginBottom: theme.spacing(3),
        },

        "& .lxr-icon": {
          width: 24,
        },

        "& .price": {
          color: '#707070'
        },
      },

      "& .rules": {
        [theme.breakpoints.down("md")]: {
          alignItems: 'center',
          textAlign: 'center'
        }
      }
    },

    gameDevSuite: {
      marginBottom: theme.spacing(8),

      "& .intro": {
        marginBottom: theme.spacing(6),
      },
      "& .illustration": {
        margin: theme.spacing(-2, 'auto', -5, 'auto'),
        display: 'block',
        height: 330,
        width: 405,
      },
    },

    features: {
      marginBottom: theme.spacing(6),

      "& .animation": {

        "& svg": {
          margin: '-50px auto 0px auto',
          display: 'block',
          height: 'auto',
          width: 435,
        },
      },

      "& .list": {
        listStyle: 'none',
        padding: 0,

        "& li": {
          alignItems: 'center',
          display: 'flex',

          "& svg": {
            color: theme.palette.lightBlue.main,
            marginRight: theme.spacing(1),
            fontSize: '1.1rem',
          },

          "&.title": {
            marginBottom: theme.spacing(2),
          },

          "&.condition": {
            marginTop: theme.spacing(2),
          },
        }
      }
    },

    otherServices: {
      marginBottom: theme.spacing(8),

      "& .animation": {
        "& svg": {
          margin: '-90px auto 0 auto',
          display: 'block',
          height: 'auto',
          width: 180,

          [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(2),
            maxWidth: '80%',
            width: 'unset',
          },
        },
      },
    },

    whitePaper: {
      marginBottom: theme.spacing(8),
    },

    telegramBot: {
      marginBottom: theme.spacing(6),

      "& .animation": {
        "& svg": {
          margin: '-5px auto',
          display: 'block',
          height: 'auto',
          width: 260,

          [theme.breakpoints.down("md")]: {
            maxWidth: '80%',
            width: 'unset',
          },
        },
      },
    },

    trueGamingLabGames: {
      "& .gamesCount": {
        padding: theme.spacing(.5, 1),
        marginLeft: theme.spacing(1),
        border: `1px solid #FFF`,
        borderRadius: 10
      },

      "& .game": {
        backgroundColor: fade(theme.palette.purple.light1, 0.1),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        width: `calc(calc(100% - ${theme.spacing(3) * 3}px) / 4)`,
        borderRadius: 28,

        [theme.breakpoints.down("md")]: {
          width: `calc(calc(100% - ${theme.spacing(3) * 2}px) / 3)`,
        },

        [theme.breakpoints.down("sm")]: {
          width: `calc(calc(100% - ${theme.spacing(3) * 1}px) / 2)`,
        },

        [theme.breakpoints.down("xs")]: {
          width: `100%`,
        },

        "& .status": {
          color: theme.palette.yellow.light,
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '.65rem',
          display: 'flex',

          "&.complete": {
            color: theme.palette.lightBlue.main,
          },

          "& svg": {
            marginLeft: theme.spacing(1),
            width: 16,
          },
        },

        "& .animation": {
          "& svg": {
            display: 'block',
            margin: 'auto',
            height: 160,
            width: 160,
          },
        },

        "& .list": {
          listStyle: 'none',
          padding: 0,

          "& li": {

            "& svg": {
              color: theme.palette.lightBlue.main,
              marginRight: theme.spacing(1),
              transform: 'scaleX(.75)',
            },
          },
        },
      },

      "& .viewMoreButton": {
        display: 'block',
        margin: 'auto',
      }
    },
  }
});

export default useStyles;