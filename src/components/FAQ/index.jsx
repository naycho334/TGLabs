import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
  Box,
} from "@material-ui/core";
import LightBlueTypography from "components/Typography/LightBlueTypography";
import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";

import YellowContainedButton from "components/Buttons/YellowContainedButton";
import RoundedTextField from "components/TextFields/RoundedTextField";
import useStyles from "./styles";

const data = [
  {
    question: "What is TGLABS token?",
    answer:
      "TGLABS is the native token of True Gaming Labs.  We develop and licence White Label Cryptocurrency Casino platforms for client. For every platform licenced, we retain a percentage of its profits that gets distributed back to our investors. This provides a unique investment opportunity, providing income from multiple sources.",
  },
  {
    question: "When will your ICO start?",
    answer:
      "TGLABS is the native token of True Gaming Labs.  We develop and licence White Label Cryptocurrency Casino platforms for client. For every platform licenced, we retain a percentage of its profits that gets distributed back to our investors. This provides a unique investment opportunity, providing income from multiple sources.",
  },
  {
    question: "Will you have any discount/bonuses?",
    answer:
      "TGLABS is the native token of True Gaming Labs.  We develop and licence White Label Cryptocurrency Casino platforms for client. For every platform licenced, we retain a percentage of its profits that gets distributed back to our investors. This provides a unique investment opportunity, providing income from multiple sources.",
  },
  {
    question: "How to join your referral program?",
    answer:
      "TGLABS is the native token of True Gaming Labs.  We develop and licence White Label Cryptocurrency Casino platforms for client. For every platform licenced, we retain a percentage of its profits that gets distributed back to our investors. This provides a unique investment opportunity, providing income from multiple sources.",
  },
  {
    question: "What are the benefits of ICC token?",
    answer:
      "TGLABS is the native token of True Gaming Labs.  We develop and licence White Label Cryptocurrency Casino platforms for client. For every platform licenced, we retain a percentage of its profits that gets distributed back to our investors. This provides a unique investment opportunity, providing income from multiple sources.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(0);
  const classes = useStyles();

  const handleChange = (value) =>
    setExpanded((state) => (state === value ? -1 : value));

  return (
    <Box className={classes.faq} py={5} id="faq">
      <LightBlueTypography
        className="normal underline underlineCenter"
        align="center"
        variant="h6"
      >
        Frequently Asked Questions
      </LightBlueTypography>

      {/* Search bar */}
      <Box mx="auto" maxWidth={400} mb={6} display="flex" mt={8}>
        <RoundedTextField
          className="noBorderRight whiteText"
          placeholder="Keyword"
          fullWidth
        />
        <YellowContainedButton variant="contained" disableRipple>
          Search
        </YellowContainedButton>
      </Box>

      {/* Questions and Answers */}
      <Box borderRadius={30} overflow="hidden" mb={5}>
        {data.map(({ question, answer }, i) => (
          <Accordion
            onChange={handleChange.bind(null, i)}
            expanded={expanded === i}
            className="accordion"
            key={question}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={
                expanded === i ? (
                  <Remove className="collapse" />
                ) : (
                  <Add className="expand" />
                )
              }
              id={`faq_${i}`}
            >
              <Typography className="white-text">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="white-text">{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Contact */}
      <Box maxWidth={620} margin="auto">
        <Typography align="center" className="yellow-text" gutterBottom>
          Still have questions?
        </Typography>
        <Typography align="center" className="white-text">
          If you cannot find answer to your question in our FAQ, you can always
          contact us with email{" "}
          <LightBlueTypography component="span">
            support@tglab.io
          </LightBlueTypography>
          . We will answer to you shortly!
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQ;
