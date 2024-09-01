import useStyles from "../styles";
import { useState } from "react";
import arrowDown from "../../../assets/arrow_down.svg";
import arrowUp from "../../../assets/arrow_up.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  removeFilterValue,
  fetchWorkers,
} from "../../../redux/workersSlice";
const Menu = ({ option }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.workers.filters);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const classes = useStyles();

  const toggleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      dispatch(setFilter({ name, value }));
    } else {
      dispatch(removeFilterValue({ name, value }));
    }
    // dispatch(
    //   fetchWorkers({
    //     page: 1,
    //     count: 10,
    //     filters: {
    //       ...filters,
    //       [name]: checked
    //         ? [...filters[name], value]
    //         : filters[name].filter((v) => v !== value),
    //     },
    //   })
    // );
  };

  return (
    <div className={classes.multi_select}>
      <div className={classes.multi_selectHeader} onClick={toggleDropDown}>
        <h4
          className={
            isDropdownOpen
              ? `${classes.menu_title} ${classes.menu_title_active}`
              : classes.menu_title
          }
        >
          {option.second_name}
        </h4>
        <img
          src={isDropdownOpen ? arrowUp : arrowDown}
          alt=""
          className={classes.toggle_arrow}
        />
      </div>
      <div
        className={
          isDropdownOpen
            ? `${classes.multi_selectDropDown} ${classes.multi_selectActive}`
            : classes.multi_selectDropDown
        }
      >
        <ul className={classes.multi_selectDropDown_options}>
          {Object.entries(option.points).map(([key, value]) => (
            <li key={value} className={classes.multi_selectDropDown_option}>
              <span className={classes.title_options}>{key}</span>
              <input
                name={option.first_name}
                type="checkbox"
                className={classes.multi_selectDropDown_option_checkbox}
                onChange={handleInputChange}
                value={value}
                checked={filters[option.first_name]?.includes(value) || false}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
