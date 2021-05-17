import { colors, darken, withStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DefaultDatePicker = withStyles((theme) => {
  return {
    root: {
      marginTop: "calc(.9rem + 8px)",
      borderRadius: theme.spacing(1),
      backgroundColor: '#F8F8F8',

      "& .MuiInputBase-root":{
        borderRadius: theme.spacing(1),
        border: `1px solid #F0F0F0`,
        backgroundColor: '#F8F8F8',
        transition: 'all .3s',
        
        "&.Mui-focused":{
          backgroundColor: '#fff'
        },
        
        "&:hover:not(.Mui-focused)":{
          backgroundColor: darken('#fff', .1)
        },
      },

      "& .MuiInput-root":{
        margin: 0
      },
      
      "& input, & textarea": {
        padding: theme.spacing(1.25),
        fontSize: '.95rem',
        color: '#5F6777',
        fontWeight: 400,
      },

      "& > :after, & > :before": {
        visibility: "hidden",
      },

      "& fieldset": {
        borderColor: `${colors.grey[200]} !important`,
        top: 0,

        "& legend": {
          display: "none",
        },
      },

      "& label": {
        transform: `translate(0px, calc(-100% - ${theme.spacing(
          1
        )}px)) !important`,
        textTransform: 'capitalize',
        fontWeight: "bold",
        fontSize: '.85rem',
        color: '#5F6777',
      },

      "&:hover": {
        "& fieldset": {
          borderColor: `${colors.grey[300]} !important`,
        },
      },

      "& textarea:focus, & input:focus": {
        "& + fieldset": {
          borderColor: `${colors.grey[400]} !important`,
        },
      },
      
      "& .Mui-disabled":{
        "&.MuiFormLabel-root":{
          color: '#00000061'
        },
        "& .inputIcon text":{
          fill: '#00000061'
        },
        "& input":{
          color: '#00000061'
        },
      },
    },
  };
})(KeyboardDatePicker);

export default DefaultDatePicker;
