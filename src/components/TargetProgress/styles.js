import { makeStyles, colors } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    progressBarContainer: {
      padding: theme.spacing(6, 8, 4, 6),
      marginBottom: theme.spacing(3),

      "& .progressBar": {
        backgroundColor: colors.grey[200],
        position: 'relative',
        borderRadius: 30,
        width: "100%",
        padding: 6,
        height: 40,

        "& > div": {
          color: colors.common.white,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 30,
          display: 'flex',
          height: '100%',
          width: '100%',
        },

        "&:before, &:after": {
          color: colors.grey[400],
          position: 'absolute',
          content: '""',
          top: -25,
        },

        "&:before": {
          content: '"0%"',
          left: 5,
        },

        "&:after": {
          content: '"100%"',
          right: 5,
        },
      },
      "& .progress": {
        background: `linear-gradient(90deg, ${theme.palette.purple.light1}, ${theme.palette.purple.light})`,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 30,
        display: 'flex',
        width: '100%',
        bottom: 0,
        left: 0,
        top: 0,
      },
      "& .progressValue": {
        transform: 'translateX(-50%)',
        position: "relative",
      },
      "& .target": {
        justifyContent: 'space-between',
        transform: 'translateX(-50%)',
        height: theme.spacing(13),
        flexDirection: 'column',
        top: theme.spacing(-4),
        whiteSpace: 'nowrap',
        position: 'absolute',
        textAlign: 'center',
        display: 'flex',

        "& span:first-child": {
          color: theme.palette.purple.main
        },

        "& span:last-child": {
          color: colors.grey[500]
        },

        "&:after": {
          backgroundColor: theme.palette.grey.border,
          transform: 'translateX(-50%)',
          height: theme.spacing(7),
          top: theme.spacing(3),
          position: 'absolute',
          content: '""',
          left: '50%',
          width: 3,
        }
      },
    },
  }
});

export default useStyles;