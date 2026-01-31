import { useNavigate } from "react-router";

const ImageView = ({ image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preview", { state: image });
  };
  return (
    <div className="overflow-hidden shadow rounded-xl border border-gray-500 pointer-fine:hover:shadow-md pointer-fine:hover:scale-105 transition duration-300 ease-in-out">
      <div
        className="relative overflow-hidden active:opacity-25 bg-gray-100 aspect-3/4"
        onClick={handleClick}
      >
        <img
          src="https://placehold.co/30x40"
          alt="Tittle"
          className="object-cover w-full h-full"
          onLoad={(e) => (e.target.src = image.preview_url)}
        />
        <p className="absolute bg-white/25 text-md text-shadow-sm/100 inset-x-0 bottom-0 backdrop-blur-xs z-10 pb-3 pt-10 pl-2 italic text-white mask-linear-from-60% mask-linear-to-100% mask-linear-0 text-md">
          {image.display_name}
        </p>
        <span className="absolute top-0 right-0 bg-purple-500 rounded-bl-xl text-white px-2 uppercase font-medium z-20">
          {image.format}
        </span>
      </div>
    </div>
  );
};

export default ImageView;
