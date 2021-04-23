import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      display: 'flex',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
    }
  }
})

export default useStyles;