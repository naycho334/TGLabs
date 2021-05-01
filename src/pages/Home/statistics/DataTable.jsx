import {
  Typography,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@material-ui/core";
import { AccessTime, AccountCircleOutlined } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { memo } from "react";
import clsx from "clsx";

import { ReactComponent as BitcoinIcon } from "../../../assets/svgs/logo_bitcoin-color.svg";
import { ReactComponent as Logo } from "../../../assets/svgs/logo_symbol_tglab-inverse.svg";

const DataTable = () => {
  return (
    <PerfectScrollbar style={{ maxHeight: 300 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>TGLab</TableCell>
            <TableCell>Hash</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array(10)
            .fill(1)
            .map((e, i) => {
              const type =
                i % 3 === 0
                  ? "pending"
                  : i % 3 === 1
                  ? "completed"
                  : "unconfirmed";

              return (
                <TableRow key={i}>
                  <TableCell>
                    <div className="date">
                      <AccessTime />
                      <Typography variant="caption">
                        14.2.2021 07:40 PM
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="user">
                      <AccountCircleOutlined />
                      <Typography variant="subtitle2">
                        fernd...@gmail.com
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="amount">
                      <BitcoinIcon />
                      <Typography variant="caption">0,00034056</Typography>
                      <Typography variant="caption" className="unit">
                        BTC
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="tglab">
                      <Typography variant="caption">0.456733</Typography>
                      <Logo />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" className="hash">
                      aa11c31e7a696eaeec254036826411499...
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      className={clsx("status", type)}
                      variant="caption"
                    >
                      {type}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </PerfectScrollbar>
  );
};

export default memo(DataTable);
