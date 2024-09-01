import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../../redux/workersSlice";
import { formatBirthdate } from "../utils/dateUtils";
import useStyles from "../styles";
import { useNavigate } from "react-router-dom";
const ListWorkersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { workers, page, count, status, hasMore, filters } = useSelector(
    (state) => state.workers
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWorkers({ page: 1, count, filters }));
    }
  }, [dispatch, count, status, filters, page]); //здесь какая то фигня

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.offsetHeight;

    if (
      windowHeight + scrollTop >= docHeight - 100 &&
      status !== "loading" &&
      hasMore
    ) {
      dispatch(fetchWorkers({ page, count, filters }));
    }
  }, [dispatch, page, count, status, hasMore, filters]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      {workers.length !== 0 ? (
        <table className={classes.table}>
          <thead className={classes.table_head}>
            <tr>
              <th>ФИО</th>
              <th>Должность</th>
              <th>Телефон</th>
              <th>Дата рождения</th>
            </tr>
          </thead>
          <tbody>
            {workers &&
              workers.map((worker) => (
                <tr
                  key={Date.now() * Math.random()}
                  className={classes.table_row}
                  onClick={() => navigate(`${worker.id}`)}
                >
                  <td className={classes.table_rowCell}>{worker.name}</td>
                  <td className={classes.table_rowCell}>{worker.position}</td>
                  <td className={classes.table_rowCell}>{worker.phone}</td>
                  <td className={classes.table_rowCell}>
                    {formatBirthdate(worker.birthdate)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        status === "loading" && <div>Loading more workers...</div>
      )}
    </>
  );
};

export default ListWorkersTable;
