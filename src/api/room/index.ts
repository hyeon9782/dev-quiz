import { instance } from "../instance";

const getRomms = () => {
  return instance.get("/room");
};

export { getRomms };
