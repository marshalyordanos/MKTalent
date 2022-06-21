import api from "./api";

const porofileApi = async (id) => {
  const x = await api.get(`/profile/filter/${id}`);
  return x.data.data;
};

export default porofileApi;
