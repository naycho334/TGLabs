import { fade, lighten, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    faq: {
      margin: theme.spacing(0, 'auto'),
      maxWidth: 900,

      "& .accordion": {
        backgroundColor: fade(lighten(theme.palette.purple.main, .2), .1),
        padding: theme.spacing(1, 2),
        margin: `0 !important`,

        "& .expand": {
          color: theme.palette.purple.light1,
        },

        "& .collapse": {
          color: theme.palette.orange.main,
        },

        "&:before": {
          backgroundColor: theme.palette.purple.light1,
          width: `calc(100% - ${theme.spacing(6)}px)`,
          transform: 'translateX(-50%)',
          left: '50%',
        },

        "&.Mui-expanded": {
          backgroundColor: fade(lighten(theme.palette.purple.main, .5), .1),
        },
      },
    },
  }
});

export default useStyles;