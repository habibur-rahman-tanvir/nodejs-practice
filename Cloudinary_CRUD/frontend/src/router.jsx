import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
]);

export default router;
