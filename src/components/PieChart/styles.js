const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: "center",
    display: 'flex',
    margin: 'auto',

    "& .recharts-wrapper": {
      width: '100%'
    },

    "& .chartAmount": {
      color: theme.palette.lightBlue.dark,
      fontSize: '1.1rem',
    },
  },

  chartContent: {
    justifyContent: 'center',
    flexDirection: "column",
    position: 'absolute',
    alignItems: "center",
    display: 'flex',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
  },
}));

export default useStyles;