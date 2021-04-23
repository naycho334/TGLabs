import { RadioButtonUncheckedOutlined } from "@material-ui/icons";
import { Box, Typography } from "@material-ui/core";

import LightBlueTitleTypography from "../../../components/Typography/LightBlueTitleTypography";

const BenefitsForInvestors = () => {
  return (
    <div>
      <LightBlueTitleTypography component="div">
        <Typography className="normal" variant="subtitle2">
          Benefits
        </Typography>
        <Typography className="normal" variant="h5">
          for Investors
        </Typography>
      </LightBlueTitleTypography>

      <Box component="ul" className="benefits" mb={5}>
        {[
          "Receive income from multiple platforms",
          "Earn profits in 12+ of the top cryptocurrencies *",
          "Easy to manage Investor dashboard to track your investment from day 1",
          "Have wider access to a range of cryptocurrency gaming platforms",
          "The opportunity to licence your own platform for FREE! **",
          "Discounted set up fees on additional features",
        ].map((text) => (
          <Typography
            className="white-text normal"
            variant="subtitle2"
            component="li"
            gutterBottom
            key={text}
          >
            <RadioButtonUncheckedOutlined />
            <span>{text}</span>
          </Typography>
        ))}
      </Box>

      <ul className="conditions">
        {[
          "* Based on the number of currency types each platform offers",
          "** No initial set up fees for VIP investors only. See pricing for more details",
        ].map((text) => (
          <Typography
            className="normal grey-text"
            variant="caption"
            component="li"
            gutterBottom
            key={text}
          >
            {text}
          </Typography>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsForInvestors;
