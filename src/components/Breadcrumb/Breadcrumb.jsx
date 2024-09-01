import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchWorkerById } from "../../redux/workerSlice";
import arrowRight from "../../assets/breadcrumb_chevron-right.svg";
import { useSelector } from "react-redux";
import useStyles from "../GeneralPage/styles";
import { styled } from "@mui/material/styles";
const Breadcrumb = () => {
  const classes = useStyles();
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { worker, status, error } = useSelector((state) => state.worker);
  const CrumbDiv = styled("div")(({ id, theme }) => ({
    "&:first-of-type": {
      [theme.breakpoints.down("sm")]: {
        display: id ? "none" : "flex",
      },
    },
  }));
  useEffect(() => {
    if (id) {
      dispatch(fetchWorkerById(id));
    }
  }, [dispatch, id]);

  const piecesPath = location.pathname.split("/").filter((path) => path !== "");
  let currentLink = "";
  const crumbs = piecesPath.map((piece, index) => {
    currentLink += `/${piece}`;

    let crumbName = piece;

    if (currentLink === "/main") {
      crumbName = "Главная";
    } else if (piece === "employees") {
      crumbName = "Список сотрудников";
    } else if (index === piecesPath.length - 1 && id) {
      crumbName = status === "succeeded" ? worker.name : "Сотрудник";
    }

    return (
      <CrumbDiv key={currentLink} className={classes.crumb} id={id}>
        <Link to={currentLink} className={classes.crumb_link}>
          {/* <span className={classes.crumb_text}>{crumbName}</span> */}
          {crumbName}
        </Link>
        {index < piecesPath.length - 1 && (
          <img src={arrowRight} alt="" className={classes.arrow_img} />
        )}
      </CrumbDiv>
    );
  });
  return <div className={`${classes.crumbs_container}`}>{crumbs}</div>;
};

export default Breadcrumb;
