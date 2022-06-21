import api from "./api";

const GetJobApi = async (id) => {
  if (id) {
    const x = await api.get(`/job/getalljob/${id}`);
    return x.data.data;
  }
  const x = await api.get(`/job`);
  return x.data.data;
};

export default GetJobApi;
