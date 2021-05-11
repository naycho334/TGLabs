import { makeStyles } from "@material-ui/core";

import Texture from "assets/svgs/background_texture-one.svg";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundImage: `url(${Texture})`,
      zIndex: theme.zIndex.modal + 1,
      backgroundSize: '102px 19px',
      backgroundColor: '#2E1C89',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      display: 'flex',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,

      "& .logo": {
        height: 30
      }
    },
    loader: {
      marginTop: theme.spacing(1),
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }
  }
})

export default useStyles;