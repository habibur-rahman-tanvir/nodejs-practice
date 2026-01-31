import { useLoaderData } from "react-router";
import ImageView from "../../components/template/ImageView";

const Home = () => {
  const dataArr = useLoaderData();

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {dataArr.map((item, index) => (
          <ImageView key={index} image={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
