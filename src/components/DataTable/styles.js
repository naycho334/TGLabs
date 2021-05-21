const { makeStyles, colors } = require("@material-ui/core");

const useStyles = makeStyles(theme => {
  return ({
    dataTable: {
      backgroundColor: theme.palette.common.white,

      "& [role='tabpanel']": {
        borderTop: `1px solid ${colors.grey[300]}`,
        background: theme.palette.common.white,
        transform: 'translateY(-4px)',
      },

      "& th, & .overline": {
        backgroundColor: theme.palette.common.white,
        textTransform: 'uppercase',
        color: colors.grey[400],
        fontSize: '.8rem'
      },

      "& .ps__rail-y": {
        height: 'calc( 100% - 37px ) !important',
        zIndex: 5
      },

      "& .loadMore": {
        color: colors.grey[600],
        display: 'block',
        margin: 'auto',

        "& .MuiButton-label": {
          flexDirection: 'column',
          display: 'flex',

          "& svg": {
            marginTop: theme.spacing(-1)
          },
        },
      }
    },


    date: {
      color: colors.grey[600],
      alignItems: 'center',
      display: 'flex',

      "& svg": {
        marginRight: theme.spacing(1),
        fontSize: '1.2rem',
      }
    },

    user: {
      color: colors.grey[700],
      alignItems: 'center',
      display: 'flex',

      "& svg": {
        marginRight: theme.spacing(1),
        color: colors.grey[600],
        fontSize: '1.2rem',
      }
    },

    amount: {
      color: colors.grey[600],
      alignItems: 'center',
      display: 'flex',

      "& span": {
        fontWeight: 'bold',
      },

      "& .unit": {
        marginLeft: theme.spacing(1.5),
        color: colors.grey[400],
        fontSize: '.65rem'
      },

      "& svg": {
        marginRight: theme.spacing(1),
      },
    },

    tglab: {
      display: 'flex',

      "& span": {
        color: theme.palette.purple.light,
        marginRight: theme.spacing(1),
        fontWeight: 'bold',
      },

      "& svg": {
        marginLeft: theme.spacing(1),
        height: 18,
        width: 18,
      },
    },

    hash: {
      color: theme.palette.lightBlue.dark,
      fontWeight: 'bold',
    },

    status: {
      border: `1px solid ${colors.grey[500]}`,
      padding: theme.spacing(.5, .8),
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '.65rem',
      borderRadius: 4,

      "&.pending": {
        color: colors.grey[500]
      },

      "&.complete": {
        borderColor: theme.palette.lightBlue.dark,
        color: theme.palette.lightBlue.dark,
      },

      "&.unconfirmed": {
        borderColor: colors.orange[800],
        color: colors.orange[800]
      },
    },

  })
})

export default useStyles;