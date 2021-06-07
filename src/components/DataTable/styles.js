const { makeStyles, colors } = require("@material-ui/core");

const useStyles = makeStyles(theme => {
  return ({
    dataTable: {
      backgroundColor: theme.palette.common.white,
      height: `calc(100% - ${theme.spacing(2)}px)`,

      "& [role='tabpanel']": {
        borderTop: `1px solid ${colors.grey[300]}`,
        background: theme.palette.common.white,
        transform: 'translateY(-4px)',
      },

      "& [data-clickable='1']": {
        borderRadius: theme.spacing(1.5),
        cursor: 'pointer',

        "&:hover": {
          backgroundColor: colors.grey[50],
        },
      },

      "& th": {
        backgroundColor: theme.palette.common.white,
        textTransform: 'uppercase',
        color: colors.grey[400],
        fontSize: '.8rem',
      },
      
      "&:not(td) .overline": {
        color: colors.grey[400],
        textTransform: 'unset',
        fontSize: '.8rem',
      },

      "& tbody tr td": {
        height: 45
      },

      "& .ps__rail-y": {
        height: 'calc( 100% - 37px ) !important',
        zIndex: 5
      },

      "& .extendCard":{
        
        "& .separator":{
          display: 'none'
        },
        
        "& .currencies":{
          paddingTop: theme.spacing(2),
          display: 'none',
        },
        
        "&.open":{
          backgroundColor: '#F2FFFF',
          border: `1px solid silver`,
          padding: theme.spacing(2),

          "& .currencies, & .separator":{
            display: 'block',
          },
        },

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

    table:{
      borderCollapse: 'collapse',
      
      "& tbody":{
        "& tr:nth-child(2)":{
          display:'none'
        },
        
        "&.expandTable":{
          borderRight: `2px solid rgba(224, 224, 224, 1)`,
          borderLeft: `2px solid rgba(224, 224, 224, 1)`,
          backgroundColor: '#F2FFFF',
          position: 'relative',
          
          "& tr:nth-child(2)":{
            display:'table-row',
      
            "& tr:nth-child(2) td":{
              borderBottom: 0
            },
          },
        },
      },
      
    },

    separator: {
      margin: theme.spacing(2, -3, .5, -3),

      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3)
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
        margin: theme.spacing(0, 1),
      },

      "& .usdValue": {
        lineHeight: `10px`,
        fontSize: 10,
      },

      "& .textSvg": {
        fontWeight: 'bold',
        fill: 'silver',
        width: 22,
      }
    },

    image: {
      maxWidth: 100
    },

    action: {
      padding: theme.spacing(1),
      color: colors.grey[600],

      "& svg": {
        transition: 'all .3s',
        height: 15,
        width: 15,
      },

      "&.open":{
        "& svg":{
          transform: 'rotateZ(180deg)'
        }
      }
    },

    tglab: {
      alignItems: 'center',
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

      "&.disabled": {
        color: colors.grey[500]
      },

      "&.info": {
        borderColor: theme.palette.lightBlue.dark,
        color: theme.palette.lightBlue.dark,
      },

      "&.danger": {
        borderColor: colors.orange[800],
        color: colors.orange[800]
      },
    },

    address: {
      color: theme.palette.purple.main,
      fontWeight: 'bold'
    },

    checkBox: {
      "& svg": {
        color: theme.palette.purple.light,
        transition: 'all .2s',

        "& path": {
          fill: colors.grey[200],
        },
      },

      "& .checked path": {
        fill: theme.palette.purple.light
      },

      "& .checkboxLabel": {
        marginRight: theme.spacing(1)
      },

      "& .Mui-disabled .checked path": {
        fill: colors.grey[200],
      },
    },
  })
})

export default useStyles;