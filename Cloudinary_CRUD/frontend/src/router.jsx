import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./feature/Home/Home";
import { homeDataLoader } from "./feature/Home/home.loader";
import Preview from "./feature/Preview/Preview";
import Upload from "./feature/Upload/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeDataLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "preview",
        Component: Preview,
      },
      {
        path: "upload",
        Component: Upload,
      },
    ],
  },
]);

export default router;
