import { colors, fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    "@global": {
      ".globalScrollbar": {
        "& > .ps__rail-x, & > .ps__rail-y": {
          zIndex: 1
        },
      },
    },

    background: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      right: 0,
      left: 0,
      top: 0,

      "& .color1, & .color2": {
        position: 'fixed',
        height: '100%',
        width: '50%',
        left: 0,
        top: 0,
      },
      "& .color1": {
        backgroundColor: '#FFFAEB',
      },
      "& .color2": {
        backgroundColor: '#2B1676',
      },

      [theme.breakpoints.down("sm")]: {
        "& .color1": {
          height: 'unset',
          width: '100%',
          right: 0,
          left: 0,
        },

        "& .color2": {
          backgroundColor: '#2B1676',
          width: '100%',
          right: 0,
          left: 0,
          top: 0,
        },
      },

      [theme.breakpoints.up("md")]: {
        "& .color1": {
          height: '100% !important',
          width: '50%',
          left: 0,
          top: 0,
        },

        "& .color2": {
          left: `unset !important`,
          right: `0 !important`,
          top: '0 !important',
          width: '50%',
        },
      },
    },

    modalContainer: {
      padding: theme.spacing(3, 3, 0, 3),
      flexDirection: "column",
      position: 'relative',
      display: "flex",
      height: "100vh",

      [theme.breakpoints.up("md")]: {
        overflowX: 'hidden',
      },

      "& .modalContainer": {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flex: 1,
      },

      "& .modal": {
        borderRadius: theme.spacing(1),
        width: '100%',
        maxWidth: 900,

        "& .form": {
          borderRadius: theme.spacing(1),
          padding: theme.spacing(6, 11),

          [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(6, 2),

            "& > div > div": {
              marginRight: 'auto',
              marginLeft: 'auto',
              maxWidth: 290,
            },
          },

          "& .logo": {
            margin: 'auto',
            marginBottom: theme.spacing(1),
            display: 'block',
            width: 170,
          },

          "& .passwordLink": {
            paddingBottom: theme.spacing(2),
            justifyContent: 'flex-end',
            display: 'flex',
            paddingTop: 0,
          },

          "& .loginButton": {
            padding: theme.spacing(1.5, 3),
            borderRadius: 32,
            maxWidth: '90%',
            display: 'block',
            margin: 'auto',
            width: '100%',
          },

          "& .newAccountLink": {
            justifyContent: 'center',
            display: 'flex',

            "& a": {
              color: colors.grey[600]
            }
          },
        },

        "& .image": {
          backgroundColor: theme.palette.purple.light,
          borderBottomRightRadius: theme.spacing(1),
          borderTopRightRadius: theme.spacing(1),
          padding: theme.spacing(3),
          justifyContent: 'center',
          position: 'relative',
          alignItems: 'center',
          display: 'flex',

          "& .blurredLogo": {
            transform: 'translate(50%, 50%)',
            position: 'absolute',
            bottom: 0,
            right: 0,
          },

          [theme.breakpoints.down("sm")]: {
            borderBottomRightRadius: theme.spacing(1),
            borderBottomLeftRadius: theme.spacing(1),
            padding: theme.spacing(5, 3),
            borderTopRightRadius: 0,

            "& .blurredLogo": {
              bottom: 10,
              width: 90,
              right: 70,
            },
          },
        },
      },

      "& .socialMediaButtons": {
        padding: theme.spacing(5, 0, 2, 0),
        justifyContent: 'center',
        display: "flex",
        flex: "none",

        "& div": {
          marginRight: theme.spacing(3),

          "&:last-child": {
            marginRight: 0
          },

          "& svg": {
            height: 22,
            width: 22,

            "& path": {
              fill: theme.palette.common.white,

              [theme.breakpoints.up("md")]: {
                fill: theme.palette.purple.light,
              }
            }
          }
        },

        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(5, 0, 3, 0),
          justifyContent: 'flex-start',
        }
      },

      "& .footer": {
        flexWrap: 'wrap',
        display: 'flex',

        "& .rights": {
          borderTop: `1px solid ${fade('#FFF', .3)}`,
          color: theme.palette.common.white,
          padding: theme.spacing(2, 0),
          textAlign: 'center',
          width: '100%',
          order: 2,

          [theme.breakpoints.up("md")]: {
            color: theme.palette.purple.light,
          },
        },

        "& .links": {
          padding: theme.spacing(0, 0, 2, 0),
          justifyContent: 'center',
          display: 'flex',
          width: '100%',
          order: 1,

          "& > div": {
            padding: theme.spacing(0, 2),
            width: 140,

            "& a": {
              fontWeight: 400
            }
          },

          "& > div:first-child": {
            justifyContent: 'flex-end',
            position: 'relative',
            display: 'flex',

            "&:after": {
              backgroundColor: theme.palette.common.white,
              transform: 'translate(50%, 0)',
              position: 'absolute',
              height: '100%',
              content: '""',
              right: 0,
              width: 1,
              top: 0,
            },
          },
        },

        [theme.breakpoints.up("md")]: {
          borderTop: `1px solid ${fade(colors.grey[500], .3)}`,
          justifyContent: 'space-between',
          padding: theme.spacing(3, 0),
          flexWrap: 'nowrap',

          "& .rights, & .links": {
            width: 'unset',
            order: 'unset',
            padding: 0,
            border: 0,
          },

          "& .links": {
            "& > div": {
              width: 'unset !important',

              "&:nth-child(1)": {
                paddingLeft: 0,
              },

              "&:nth-child(2)": {
                paddingRight: 0,
              },
            },
          },
        }
      }
    },
  }
});

export default useStyles;