import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    description: {
      maxWidth: 620,
      margin: 'auto'
    },

    // token supply
    tokenSupply: {
      padding: `42px 0px 41px 0px !important`,
      marginBottom: theme.spacing(12),
      margin: 'auto',
      maxWidth: 800,

      "& .progressBar": {
        background: `linear-gradient(-90deg, ${theme.palette.lightBlue.main}, ${theme.palette.yellow.light}) !important`,
        height: `20px !important`,
        padding: `0 !important`,
      },

      "& .target": {
        height: `108px !important`,
        top: `-45px !important`,

        "& span:first-child": {
          color: `${theme.palette.lightBlue.main} !important`
        },

        "&:after": {
          top: `26px !important`,
          height: 60,
        },
      },
    },

    // token distribution
    tokenDistribution: {
      marginBottom: theme.spacing(11),
      position: 'relative',

      "& .chartContainer":{
        "& svg": {
          display: 'block',
          maxWidth: '100%',
          margin: 'auto',
          maxHeight: 520,
          height: 'auto',
          width: 800,
        },
        
        [theme.breakpoints.down("xs")]:{
          display: 'none'
        },
      },

      "& .chartContainerMobile":{
        display: 'block',
        
        "& svg": {
          height: 'auto',
          
          "&.chart": {
            marginBottom: theme.spacing(4),
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          },
          "&.info": {
            maxWidth: 270,
            height: 'auto'
          },
          
        },
        
        [theme.breakpoints.up("sm")]:{
          display: 'none',
        },
      },

      "& img": {
        transform: 'translate(-55%, 5%)',
        position: 'absolute',
        width: 194,
        bottom: 0,
        left: 0,
      },
    },

    // Referrals
    referrals: {
      background: `linear-gradient(180deg, ${fade(theme.palette.purple.light1, .3)}, ${fade(theme.palette.purple.light, .3)})`,
      padding: theme.spacing(3, 4, 5, 4),
      marginBottom: theme.spacing(9),
      position: 'relative',
      borderRadius: 30,

      "& .description": {
        marginBottom: theme.spacing(3),

        "& p": {
          margin: 0
        }
      },
      
      "& .registerButton": {
        display: 'block',
        margin: 'auto',
      },
      
      "& img": {
        position: 'absolute',
        userSelect: 'none',
        right: 0,
        top: -65,
      },
      
      [theme.breakpoints.down("md")]:{
        marginBottom: theme.spacing(13),
        
        "& img": {
          marginBottom: -260,
          position: 'static',
          display: 'block',
          marginTop: -50,
          margin: 'auto',
        },
      }
    },

    // Fund Allocation
    fundAllocation: {
      marginBottom: theme.spacing(5),
      position: 'relative',

      "& .chartContainer": {
        position: 'relative',

        "& svg": {
          marginBottom: theme.spacing(12),
          display: 'block',
          margin: 'auto',
          minWidth: 599,
        },

        [theme.breakpoints.down("sm")]:{
          height: 380,

          "& svg": {
            transform: 'translate(-50%)',
            position: 'absolute',
            maxWidth: '100%',
            left: '50%',
          },
        },
      },


      [theme.breakpoints.down("xs")]:{
        "& svg text:nth-child(2n)":{
          display: 'none'
        }
      },

      "& .coinBlurred": {
        transform: 'translate(-50%, 90%)',
        position: 'absolute',
        width: 250,
        bottom: 0,
        left: 0,
      },

      "& .card": {
        "& .title": {
          paddingLeft: `calc( ${theme.spacing(1)}px + 25px )`,
          position: 'relative',
          lineHeight: '1rem',

          "&:before": {
            transform: 'translateY(-50%)',
            position: 'absolute',
            borderRadius: 20,
            content: '""',
            height: 25,
            top: '50%',
            width: 25,
            left: 0,
          }
        },

        "& .description": {
          lineHeight: '1rem'
        },

        ...[
          "#FEECA8",
          "#BDC3D0",
          "#F48A5B",
          "#6B24D6",
          "#6D51F3",
          "#2AF6FF",
          "#138BBD",
        ].map((color, index) => ({
          [`&:nth-child(${index + 1}) .title:before`]: {
            backgroundColor: color
          }
        })).reduce((p, n) => ({ ...p, ...n }), {})
      },
    }
  }
});

export default useStyles;