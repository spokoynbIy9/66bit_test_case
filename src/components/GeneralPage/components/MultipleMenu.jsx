import Menu from "./Menu";
import { OPTIONS } from "../constants/constants";
import useStyles from "../styles";
const MultipleMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.multipleMenu}>
      {OPTIONS.map((option) => (
        <Menu key={option.id} option={option} />
      ))}
    </div>
  );
};

export default MultipleMenu;
