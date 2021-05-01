import { RadioButtonUncheckedOutlined, Add } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import propTypes from "prop-types";

const List = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((item, j) =>
        typeof item === "string" ? (
          <Typography
            className="white-text"
            variant="caption"
            component="li"
            key={j}
          >
            <Add />
            <span>{item}</span>
          </Typography>
        ) : (
          <ul key={j}>
            {item.map((text, i) => (
              <Typography
                className="white-text"
                variant="caption"
                component="li"
                key={i}
              >
                <RadioButtonUncheckedOutlined />
                <span>{text}</span>
              </Typography>
            ))}
          </ul>
        )
      )}
    </ul>
  );
};

List.propTypes = {
  list: propTypes.oneOfType([propTypes.string, propTypes.array]).isRequired,
};

List.defaultProps = {
  list: [],
};

export default List;
