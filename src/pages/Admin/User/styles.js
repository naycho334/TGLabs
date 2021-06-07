import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    infoBar: {
      "& button": {
        "& svg *": {
          stroke: theme.palette.common.white,
        }
      }
    },
    balances: {
      "& .tglabValue": {
        "& span": {
          fontWeight: 'normal',
          fontSize: '1.3rem',
        },
        "& svg": {
          height: 25,
          width: 25,
        },
      }
    },
    referralEarnings: {

      "& .bar": {
        "& .tglabValue": {

          "& span": {
            fontSize: '1rem',
            fontWeight: 'normal',
          },

          "& svg": {
            height: 25,
            width: 25,
          },
        },
      },

      "& .amountValue": {
        fontSize: '.9rem'
      },

      "& .tglabValue": {
        fontSize: '.9rem'
      },
    },
    wallets: {
      "& .label": {
          height: 30,

        "& .labelIcon": {
          opacity: 0.3,
          height: 20,
          width: 20,
        },
      },
    }
  }
});

export default useStyles;