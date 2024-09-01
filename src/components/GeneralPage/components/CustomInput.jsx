import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers, setFilter } from "../../../redux/workersSlice";
import { useState } from "react";
import { debounce } from "../utils/debounce";
import { useCallback } from "react";
import useStyles from "../styles";
const CustomInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.workers.filters);

  const debounceFetchWorkers = useCallback(
    debounce((newFilters) => {
      dispatch(fetchWorkers({ page: 1, count: 10, filters: newFilters }));
    }, 500),
    [dispatch]
  );

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);

    const newFilters = { ...filters, name: value };
    dispatch(setFilter({ name: "name", value }));
    debounceFetchWorkers(newFilters);
  };

  const classes = useStyles();
  return (
    <input
      type="text"
      name="name"
      value={value}
      onChange={handleInputChange}
      placeholder="Поиск"
      className={classes.customInput}
    />
  );
};

export default CustomInput;
