import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import { adminAllSupportTicketsActions } from "./allSupportTickets.slice";
import CheckBoxCell from "components/DataTable/components/CheckBoxCell";
import AllSupprtTicketsCard from "./components/AllSupprtTicketsCard";
import StatusCell from "components/DataTable/components/StatusCell";
import SupportTicketDialog from "./components/SupportTicketDialog";
import AllSupprtTicketsBar from "./components/AllSupprtTicketsBar";
import DateCell from "components/DataTable/components/DateCell";
import UserCell from "components/DataTable/components/UserCell";
import TextCell from "components/DataTable/components/TextCell";
import DataTable from "components/DataTable";
import Section from "components/Section";
import useStyles from "./styles";

let timer;

const AllSupportTickets = () => {
  const { data, isReadOnly, search, cardsCount, ticketToEdit } = useSelector(
    (state) => state.adminAllSupportTicketsReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const checkedRowsCount = _.values(data).filter((item) => item.checked).length;
  const allRowsChecked = _.values(data).every((item) => item.checked);

  /**
   * Format table data
   */
  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.ticketId, className: "blue-text" },
    2: { value: item.username },
    3: { value: item.subject, className: "bold dark-grey-text" },
    4: { value: item.description, className: "grey-text" },
    5: { value: item.status, className: item.status },
    6: { value: item.checked, id: item.id },
    id: item.id
  });

  /**
   * Check/Unckeck all rows
   */
  const checkUncheckAllRows = () =>
    dispatch(adminAllSupportTicketsActions.checkAllRows());

  /**
   * Check a row
   */
  const checkRow = (rowData) =>
    dispatch(adminAllSupportTicketsActions.checkRow(rowData));

  /**
   * Change search text
   */
  const changeSearch = ({ target: { value } }) => {
    dispatch(adminAllSupportTicketsActions.changeSearch(value));

    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => dispatch(adminAllSupportTicketsActions.fetchData()),
      1000
    );
  };

  /**
   * Load more data
   */
  const loadMoreData = () => dispatch(adminAllSupportTicketsActions.loadMore());

  /**
   * Edit ticket
   */
  const openTicketEditorDialog = (id) =>
    dispatch(adminAllSupportTicketsActions.editTicket(id));

  /**
   * Change row value
   */
  const changeValue = ({ target: { name, value } }) =>
    dispatch(
      adminAllSupportTicketsActions.changeDailogValue({ [name]: value })
    );

  /**
   * Update ticket
   */
  const updateTicket = () =>
    dispatch(adminAllSupportTicketsActions.updateTicket());

  const tableHead = [
    { label: "Date" },
    { label: "TicketId" },
    { label: "Username" },
    { label: "Subject" },
    { label: "Description" },
    { label: "" },
    {
      label: "All",
      checkbox: true,
      checkBoxProps: {
        onChange: checkUncheckAllRows,
        checked: allRowsChecked,
        disabled: isReadOnly,
      },
    },
  ];

  return (
    <Grid item xs={12} className={classes.awaitingApproval}>
      <Section
        title="All Support Tickets"
        header={
          <AllSupprtTicketsBar
            count={checkedRowsCount}
            buttonProps={{
              disabled: _.eq(checkedRowsCount, 0) || isReadOnly,
              onClick: () => alert("Approve"),
            }}
            inputProps={{
              value: search,
              onChange: changeSearch,
              disabled: isReadOnly,
            }}
          />
        }
        headerProps={{ spacing: 2 }}
      >
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={AllSupprtTicketsCard}
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
            {
              component: CheckBoxCell,
              props: { onChange: checkRow, disabled: isReadOnly },
              tableCellProps: {
                padding: "checkbox",
                align: "right",
              },
            },
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

export default memo(AllSupportTickets);
