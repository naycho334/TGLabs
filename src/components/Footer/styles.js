import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    footer: {

      "& .bottom": {
        borderTop: `1px solid ${fade(theme.palette.common.white, .2)}`,
        padding: theme.spacing(3, 0),
        
        [theme.breakpoints.down("sm")]:{
          flexDirection: 'column',
          borderTop: 0,
          
          "& > div":{
            justifyContent: 'center',
            display: 'flex',
            width: '100%',
            
            "&:nth-child(1)":{  
              borderTop: `1px solid ${fade(theme.palette.common.white, .2)}`,
              paddingTop: theme.spacing(3),
              order: 2,
            },
            "&:nth-child(2)":{  
              paddingBottom: theme.spacing(3),
              order: 1
            },
            "&:nth-child(3)":{  
              order: 3
            },
          }
        }
      },

      "& .buyToken": {
        marginTop: theme.spacing(4),
        justifyContent: "flex-end",
        position: 'relative',
        display: "flex",

        "& img": {
          position: 'absolute',
          top: '-370%',
          right: '10%',
          zIndex: -1,

          [theme.breakpoints.down("sm")]:{
            right: "-50%",
            top: "-500%",
          }
        },
      },

      "& .bottomLinks": {
        justifyContent: 'center',
        display: "flex",

        "& a:first-child": {
          marginRight: theme.spacing(3),
          position: 'relative',

          "&:after": {
            backgroundColor: theme.palette.common.white,
            transform: 'translateY(-50%)',
            right: theme.spacing(-1.5),
            position: 'absolute',
            height: '75%',
            content: '""',
            top: '50%',
            width: 1,
          },
        },
      },

      "& .credits": {
        alignItems: 'center',
        display: 'flex',

        "& svg": {
          marginLeft: theme.spacing(1.5)
        },
      },
    }
  }
});

export default useStyles;