import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    header: {
      paddingTop: theme.spacing(5)
    },
    title: {
      color: theme.palette.orange.light
    },
    breadcrumbs: {
      "& .title": {
        color: theme.palette.lightBlue.main,
      },
      "& .MuiBreadcrumbs-separator": {
        color: theme.palette.lightBlue.main,
      },
    },
  }
})

export default useStyles;