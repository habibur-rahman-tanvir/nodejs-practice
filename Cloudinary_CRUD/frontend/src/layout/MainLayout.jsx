import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <div className="h-dvh flex-col flex">
      <div>
        <Header />
      </div>
      <div className="flex-1">
        <p>Contents</p>
      </div>
    </div>
  );
};

export default MainLayout;
