import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {

  return {
    discountsContainer: {
      padding: theme.spacing(3, 8, 3, 6),
      
      "& .line": {
        background: `linear-gradient(0deg, ${theme.palette.lightBlue.main}, ${theme.palette.yellow.light})`,
        padding: theme.spacing(0, .75),
        position: 'relative',
        borderRadius: 15,
        margin: 'auto',
        height: 450,
        width: 15,
        
        "& .progress":{
          maxHeight: `calc(100% - ${theme.spacing(1.5)}px)`,
          maxWidth: `calc(100% - ${theme.spacing(1.5)}px)`,
          backgroundColor: theme.palette.common.white,
          top: theme.spacing(.75),
          position: 'absolute',
          borderRadius: 4,
          
          [theme.breakpoints.up("md")]: {
            transform: 'translate(0, -50%)',
            top: '50%',
            height: 3,
          },
        },

        [theme.breakpoints.up("md")]: {
          background: `linear-gradient(-90deg, ${theme.palette.lightBlue.main}, ${theme.palette.yellow.light})`,
          margin: 'unset',
          width: '100%',
          height: 15,
        }
      },
      "& .stages": {
        position: 'relative'
      },
      "& .stage": {
        position: 'absolute',
        display: 'flex',

        ...Array(6).fill(1).map((e,index, {length})=>({
          [`&:nth-child(${index + 1})`]:{
            zIndex: length - index
          }
        }))
        .reduce((p, n)=>({ ...p, ...n }), {}),

        "& .editStage":{
          transform: `translateY(${theme.spacing(-1)}px)`,
          marginLeft: theme.spacing(.5),
          padding: theme.spacing(.75),
          position: 'absolute',

          "& svg":{
            height: 18,
            width: 18,
          },
        },

        "& > span:last-child": {
          color: theme.palette.purple.light
        },

        "&:before": {
          border: `4px solid ${theme.palette.purple.light}`,
          position: 'absolute',
          borderRadius: 15,
          content: '""',
          height: 30,
          width: 30,
        },

        "& .status":{
          transform: 'translateY(-4px) scale(.9)',
          position: 'absolute',
          width: 30,

          "&.checked":{
            
          },
          "&.pending *":{
            stroke: theme.palette.orange.main
          },

          [theme.breakpoints.down("sm")]:{
            transform: 'translate(-34px, -1px) scale(.6)',
            height: 30,
          }
          
        },
        
        "&.current":{
          "&:before": {
            backgroundColor: theme.palette.purple.light,
          },
        },

        [theme.breakpoints.down("sm")]: {
          transform: 'translateY(-15px)',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          left: 0,

          "& > span": {
            transform: 'translateY(30px)',
            width: 100,

            "&:nth-child(1)": {
              marginRight: theme.spacing(4) + 15,
              transform: 'translateY(38px)',
              flexDirection: 'column',
              textAlign: 'right',
              display: 'flex',
            }
          },

          "&:before": {
            transform: 'translateX(-50%)',
            left: '50%',
          },

          "&:nth-child(2)": {
            "&:before": {
              visibility: 'hidden'
            },
          },

          "& .stageContent":{
            flexDirection: 'row !important',
            justifyContent: 'space-between',
            display: 'flex',
            
            "& > div":{
              flexDirection: 'column',
              lineHeight: '.9rem',
              display: 'flex',
            },
            
            "& > button":{
              position: 'relative',
              transform: 'unset',
              margin: 'auto 0',
            },
          },
          
        },

        [theme.breakpoints.up("md")]: {
          justifyContent: 'space-between',
          height: theme.spacing(8),
          flexDirection: 'column',
          top: theme.spacing(-3),

          "& > span": {
            marginLeft: 30
          },

          "&:before": {
            transform: 'translateY(-50%)',
            top: '50%',
            left: 0,
          },

          "&:nth-child(2)": {
            "& span": {
              marginLeft: 0
            },

            "&:before": {
              visibility: 'hidden'
            },
          },

          "& .editStage":{
            right: theme.spacing(-4),
            top: 0,
          }
        }
      },
    },
  }
});

export default useStyles;