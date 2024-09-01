import { useDispatch, useSelector } from "react-redux";
import { removeFilterValue, setFilter } from "../../../redux/workersSlice";
import { fetchWorkers } from "../../../redux/workersSlice";
import { OPTIONS } from "../constants/constants";
import useStyles from "../styles";
import { store } from "../../../redux/store";
const SelectedFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.workers);
  const classes = useStyles();

  const handleRemoveFilter = (name, value) => {
    dispatch(removeFilterValue({ name, value }));
    // dispatch(fetchWorkers({ page: 1, count: 10, filters }));
  };

  const searchForFilters = (e) => {
    e.preventDefault();
    dispatch(fetchWorkers({ page: 1, count: 10, filters }));
  };

  const getLabelFromValue = (valueToFind) => {
    for (const option of OPTIONS) {
      for (const [key, value] of Object.entries(option.points)) {
        if (value === valueToFind) {
          const result = key.toLowerCase();
          return result;
        }
      }
    }
    return valueToFind;
  };

  const hasSelectedFilters = Object.entries(filters).some(
    ([key, values]) => key !== "name" && values.length > 0
  );
  return (
    <>
      {hasSelectedFilters && (
        <div className={classes.selected_container}>
          <div className={`${classes.selected_wrapper} `}>
            <div className={`${classes.selected_filters_container} `}>
              <h3 className={classes.selected_title}>Выбранные фильтры:</h3>
              <div className={classes.selected_filters}>
                {Object.entries(filters)
                  .filter(([key]) => key !== "name")
                  .map(
                    ([key, values]) =>
                      values.length > 0 && (
                        <div key={key} className={classes.selected_filters}>
                          {values.map((value) => (
                            <div
                              key={value}
                              onClick={() => handleRemoveFilter(key, value)}
                              className={classes.point_button}
                            >
                              <svg
                                className={classes.point_img}
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.67824 4.99992L9.85953 0.818698C10.0468 0.631402 10.0468 0.327767 9.85953 0.140471C9.67223 -0.0468238 9.36859 -0.0468238 9.18129 0.140471L5 4.32169L0.818711 0.141111C0.631412 -0.0461846 0.327772 -0.0461846 0.140474 0.141111C-0.0468245 0.328406 -0.0468245 0.632042 0.140474 0.819337L4.32176 5.00056L0.141113 9.18114C-0.0461853 9.36844 -0.0461853 9.67207 0.141113 9.85937C0.235082 9.9527 0.357177 10 0.479912 10C0.602646 10 0.725381 9.95334 0.818711 9.85937L5 5.67815L9.18129 9.85937C9.27526 9.9527 9.39735 10 9.52009 10C9.64282 10 9.76556 9.95334 9.85889 9.85937C10.0462 9.67207 10.0462 9.36844 9.85889 9.18114L5.67824 4.99992Z"
                                />
                              </svg>

                              <span className={classes.point_title}>
                                {getLabelFromValue(value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )
                  )}
              </div>
            </div>
            <button
              className={classes.selected_button}
              onClick={searchForFilters}
            >
              Найти
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedFilters;
