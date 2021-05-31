import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    openSupportTickets:{
      "& .tableTicket":{
        width: 90
      }
    }
  }
});

export default useStyles;