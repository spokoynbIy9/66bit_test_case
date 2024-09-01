import Header from "../GeneralPage/components/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import useStyles from "../GeneralPage/styles";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <Header></Header>
      <Breadcrumb></Breadcrumb>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
