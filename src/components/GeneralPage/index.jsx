import Header from "./components/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ListWorkers from "./components/ListWorkers";
import useStyles from "./styles";
const ListWorkersPage = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Header></Header>
      <Breadcrumb></Breadcrumb> */}
      <ListWorkers></ListWorkers>
    </div>
  );
};

export default ListWorkersPage;
