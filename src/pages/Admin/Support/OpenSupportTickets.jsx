import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import { adminOpenSupportTicketsActions } from "./openSupportTickets.slice";
import OpenSupportTicketCard from "./components/OpenSupportTicketCard";
import StatusCell from "components/DataTable/components/StatusCell";
import SupportTicketDialog from "./components/SupportTicketDialog";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import TextCell from "components/DataTable/components/TextCell";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

const tableHead = [
  { label: "Date" },
  { label: "TicketId" },
  { label: "Username" },
  { label: "Subject" },
  { label: "Description" },
  { label: "" },
];

const OpenSupportTickets = () => {
  const { data, cardsCount, isReadOnly, ticketToEdit } = useSelector(
    (state) => state.adminOpenSupportTicketsReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   * Format data
   */
  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.ticketId, className: "blue-text" },
    2: { value: item.username },
    3: { value: item.subject, className: "bold dark-grey-text" },
    4: { value: item.description, className: "grey-text" },
    5: { value: item.status, className: item.status },
    id: item.id,
  });

  /**
   * Load more data
   */
  const loadMoreData = () =>
    dispatch(adminOpenSupportTicketsActions.loadMore());

  /**
   * Edit ticket
   */
  const openTicketEditorDialog = (id) =>
    dispatch(adminOpenSupportTicketsActions.editTicket(id));

  /**
   * Change row value
   */
  const changeValue = ({ target: { name, value } }) =>
    dispatch(
      adminOpenSupportTicketsActions.changeDailogValue({ [name]: value })
    );

  /**
   * Update ticket
   */
  const updateTicket = () =>
    dispatch(adminOpenSupportTicketsActions.updateTicket());

  return (
    <Grid item xs={12} className={classes.openSupportTickets}>
      <Section
        headerProps={{ justify: "space-between", spacing: 1 }}
        title="Open Support Tickets"
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={OpenSupportTicketCard}
          cardsCount={cardsCount}
          loadMore={loadMoreData}
          onClick={openTicketEditorDialog}
          components={[
            { component: DateCell, tableCellProps: { className: "tableDate" } },
            { component: TextCell },
            { component: UserCell },
            { component: TextCell },
            { component: TextCell },
            { component: StatusCell, tableCellProps: { align: "right" } },
          ]}
        />
      </Section>

      <SupportTicketDialog
        onClose={openTicketEditorDialog.bind(null, null)}
        open={!_.isNull(ticketToEdit)}
        isReadOnly={isReadOnly}
        onChange={changeValue}
        onSave={updateTicket}
        data={ticketToEdit}
      />
    </Grid>
  );
};

export default memo(OpenSupportTickets);
