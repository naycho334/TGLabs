import { RadioButtonUncheckedOutlined } from "@material-ui/icons";
import { Box, Typography } from "@material-ui/core";

import LightBlueTitleTypography from "../../../components/Typography/LightBlueTitleTypography";

const BenefitsForClients = () => {
  return (
    <div>
      <LightBlueTitleTypography component="div">
        <Typography className="normal" variant="subtitle2">
          Benefits
        </Typography>
        <Typography className="normal" variant="h5">
          for Clients
        </Typography>
      </LightBlueTitleTypography>

      <Box component="ul" className="benefits" mb={5}>
        {[
          "White label solution for quick roll out to users and fast user base onboarding.",
          "Over 200,000 cryptocurrencies to add",
          "No set up fees*",
          "No fixed monthly fees**",
          "Multiple features and games to choose from",
          "On going maintenance",
          "24/7 Support",
          "Free updates for 12 months***",
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
          "* No initial set up fees for VIP investors only. See pricing for more details.",
          "** A percentage of platform profits, rather than a fixed monthly fee.",
          "*** Updates will be charged for at a minimal value after the first 12 months.",
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

export default BenefitsForClients;
