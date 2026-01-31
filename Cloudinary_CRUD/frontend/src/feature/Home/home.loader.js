import { api } from "../../utils/appClient";

const homeDataLoader = async () => {
  const data = await api.get("/photo");
  if (data.status === 200) return data.data.items;
  return [];
};

export { homeDataLoader };
