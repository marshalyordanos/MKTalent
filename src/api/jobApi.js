import api from "./api";

const createJobApi = async (body) => {
  const x = api.post("/job/createjob", body);
  return (await x).data.data;
};
