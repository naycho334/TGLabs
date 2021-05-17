import { colors, darken, TextField, withStyles } from "@material-ui/core";

const DefaultTextField = withStyles((theme) => {
  return {
    root: {
      marginTop: "calc(.9rem + 8px)",
      borderRadius: 4,

      "& input, & textarea": {
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
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: ".9rem",
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

      "&.outlined": {

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
        
        "& input, & textarea": {
          padding: theme.spacing(1.25),
          fontSize: '.95rem',
          color: '#5F6777',
          height: '100%',
          width: '100%',
        },

        "& .MuiInput-formControl":{
          marginTop: 0
        },

        "& label":{
          textTransform: 'capitalize',
          fontSize: '.85rem',
          color: '#5F6777',

          "&.Mui-focused":{
            color: '#3f51b5'
          },
        },

        "& .Mui-disabled":{
          "&.MuiFormLabel-root":{
            color: '#00000061'
          },
          "& .inputIcon text":{
            fill: '#00000061'
          },
          "& input, & textarea":{
            color: '#00000061'
          },
        },
      },
    },
  };
})(TextField);

export default DefaultTextField;
