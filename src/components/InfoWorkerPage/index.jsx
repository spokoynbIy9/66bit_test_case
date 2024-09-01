import { useDispatch, useSelector } from "react-redux";
import GeneralInfo from "./components/GeneralInfo";
import MainInfo from "./components/MainInfo";
import { useEffect } from "react";
import { fetchWorkerById } from "../../redux/workerSlice";
import { useParams } from "react-router-dom";
import { formatBirthdate } from "../GeneralPage/utils/dateUtils";
import useStyles from "../GeneralPage/styles";
const InfoWorkerPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { worker, status } = useSelector((state) => state.worker);
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchWorkerById(id));
  }, [dispatch, id]);
  if (status === "loading" || !worker) {
    return <div>Loading...</div>;
  }
  const { name, photo, position, stack, phone, birthdate, dateOfEmployment } =
    worker;
  return (
    <>
      <div className={`${classes.container}`}>
        <GeneralInfo
          name={name}
          position={position}
          stack={stack}
          photo={photo}
        />
      </div>
      <div className={classes.container_separatly_line}>
        <hr className={classes.separatly_line} />
      </div>
      <MainInfo
        phone={phone}
        birthdate={formatBirthdate(birthdate)}
        dateOfEmployment={dateOfEmployment}
      ></MainInfo>
    </>
  );
};

export default InfoWorkerPage;
