import { useLocation, useNavigate } from "react-router";
import { api } from "../../utils/appClient";
import { useState } from "react";

const Preview = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { state: image } = useLocation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const data = await api.delete(
        `/photo/${encodeURIComponent(image.public_id)}`,
      );
      if (data.status === 200) {
        return navigate("/", { replace: true });
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center p-2">
      <img
        src={image.url}
        className="rounded-lg max-h-full w-auto object-contain bg-white/50 p-2"
      />
      <button
        disabled={isLoading}
        onClick={handleDelete}
        className="bg-red-600/75 active:bg-yellow-400 p-1 text-5xl rounded-full text-white w-xl"
      >
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default Preview;
