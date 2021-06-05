import { darken, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    livePlatformPools: {
      "& td": {
        "&:nth-child(4), &:nth-child(5)": {
          paddingRight: theme.spacing(.5),
          paddingLeft: theme.spacing(.5),

          "& button": {
            margin: '0 auto',
            display: 'block',
          }
        },

        "& .amountValue": {
          fontSize: '.9rem'
        }
      },
    },
    platformRewardReceived: {
      "& td": {
        "&:nth-child(5)": {
          width: 50
        },

        "& .amountValue": {
          fontSize: '.9rem'
        }
      },
    },
    dialog: {
      '& .uploadBox': {
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(1),
        border: `2px dashed #FCECB0`,
        backgroundColor: '#FEFAED',
        padding: theme.spacing(2),
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        width: '100%',

        "& button": {
          marginBottom: theme.spacing(1),
        },

        "&.active": {
          backgroundColor: darken('#FEFAED', .05),
          borderColor: darken('#FCECB0', .05),

        },
      }
    }
  }
});

export default useStyles;