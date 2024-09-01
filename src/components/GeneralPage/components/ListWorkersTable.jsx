import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../../redux/workersSlice";
import { formatBirthdate } from "../utils/dateUtils";
import useStyles from "../styles";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const ListWorkersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { workers, page, count, status, hasMore, filters } = useSelector(
    (state) => state.workers
  );
  const pageRef = useRef(page);
  useEffect(() => {
    console.log("render");

    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      if (
        windowHeight + scrollTop >= docHeight - 100 &&
        status !== "loading" &&
        hasMore &&
        pageRef.current > 1
      ) {
        dispatch(fetchWorkers({ page: pageRef.current, count, filters }));
      }
    };
    if (status === "idle" && page === 1 && workers.length === 0) {
      dispatch(fetchWorkers({ page, count, filters }));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, page, count, status, hasMore, filters, workers.length]);
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
