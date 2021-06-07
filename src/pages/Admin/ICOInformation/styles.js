import { colors, lighten, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    currentICOStage: {
      position: 'relative',

      "& .stage-title": {
        position: 'absolute',

        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(3),
          position: 'static',

        }
      },

      "& .icoStageFooter": {

        "& .date": {
          fontSize: '.7rem',
          marginTop: theme.spacing(-.7),
        },
      },

      "& .remainingTokens": {
        marginBottom: theme.spacing(-.5),

        [theme.breakpoints.down("xs")]: {
          marginBottom: 0,

          "& .MuiGrid-item": {
            marginTop: theme.spacing(-.25),
            padding: theme.spacing(0, 1),
          },

          "& > div": {
            justifyContent: 'center',
            display: 'flex',
            width: '100%',

            "& > div": {
              marginBottom: theme.spacing(.5),
              width: 'unset',

              "& > span": {
                lineHeight: '1rem',
              },
            },
          },
        }
      },

      "& .completionProgress": {
        "& .progressBar": {
          padding: theme.spacing(.3),
          backgroundColor: colors.grey[200],
          borderRadius: 8,
          width: '100%',
          height: 14,

          "& > div": {
            background: `linear-gradient(90deg, ${theme.palette.yellow.light}, ${theme.palette.lightBlue.main})`,
            borderRadius: 8,
            height: '100%',
          }
        }
      }
    },
    totals: {
      [theme.breakpoints.up("lg")]: {
        flex: 'unset',
        width: 348,
      },

      '& .registered': {
        "& svg": {
          display: 'block',
          margin: 'auto',
          height: 15.5,
          width: 15.5,
        }
      },
    },
    stagesTimeline: {
      backgroundColor: lighten(theme.palette.lightBlue.main, .92),
      padding: `${theme.spacing(7, 3)} !important`,
    },
    stageDialog: {
      "& .inputIcon": {
        padding: theme.spacing(1.5),

        "& svg": {
          height: 20,
        },

        "& text": {
          fontSize: '.40rem',
          fontWeight: 'bold',
          fill: '#5F6777',
        }
      },
    },
    icoPurchases: {
      "& td:nth-child(1)": {
        width: 90
      },

      "& .tabs": {
        minHeight: 'unset',

        "& .MuiTabs-indicator": {
          backgroundColor: theme.palette.purple.light,
          transform: 'scaleX(.5)',
        },
        "& button": {
          padding: theme.spacing(1, 2),
          minHeight: 'unset',
          minWidth: 'unset',
          fontSize: '.8rem',
        },
      },
    },
    topContributors: {
      "& td:nth-child(1)": {
        width: 90
      }
    },
    awaitingApproval: {
      "& td:nth-child(1)": {
        width: 90
      },

      "& .textField": {
        [theme.breakpoints.down("md")]: {
          marginTop: theme.spacing(2),
          order: 1,
        }
      }
    },
  }
});

export default useStyles;