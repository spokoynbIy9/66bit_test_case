import useStyles from "../../GeneralPage/styles";
const MainInfo = ({ phone, birthdate, dateOfEmployment }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.container_mainInfo} ${classes.container}`}>
      <h3 className={classes.mainInfo_title}>Основная информация</h3>
      <ul className={classes.mainInfo_list}>
        <li className={classes.mainInfo_list_point}>
          <p className={classes.mainInfo_list_pointName}>
            Контактный телефон:{" "}
            <span className={classes.mainInfo_list_pointValue}>{phone}</span>
          </p>
        </li>
        <li className={classes.mainInfo_list_point}>
          <p className={classes.mainInfo_list_pointName}>
            Дата рождения:{" "}
            <span className={classes.mainInfo_list_pointValue}>
              {birthdate}
            </span>
          </p>
        </li>
        <li className={classes.mainInfo_list_point}>
          <p className={classes.mainInfo_list_pointName}>
            Дата устройства:{" "}
            <span className={classes.mainInfo_list_pointValue}>
              {dateOfEmployment}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MainInfo;
