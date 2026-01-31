import { RouterProvider } from "react-router";
import router from "./router";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.addEventListener("scroll", (e) => e.preventDefault());
  }, []);

  return (
    <div className="h-dvh bg-no-repeat bg-cover bg-center bg-clip-border bg-[url(https://img.freepik.com/free-photo/mysterious-winter-landscape-majestic-mountains-winter_146671-14057.jpg?w=360)]">
      <div className="backdrop-blur-xs h-dvh">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
