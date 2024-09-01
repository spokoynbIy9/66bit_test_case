import ListWorkersPage from "./components/GeneralPage";
import InfoWorkerPage from "./components/InfoWorkerPage";
import Layout from "./components/Layout/Layout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/main/employees" />,
    },
    {
      path: "/main",
      element: <Navigate to="/main/employees" />,
    },
    {
      path: "/main/employees",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <ListWorkersPage />,
        },
        {
          path: ":id",
          element: <InfoWorkerPage />,
        },
      ],
    },
    {
      path: "*",
      element: <>Ошибка!</>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
