import api from "./api";

const PostApi = async (id) => {
  if (id) {
    const x = await api.get(`/posts/${id}`);
    return x.data.data;
  }
  const x = await api.get(`/posts`);
  return x.data.data;
};

export default PostApi;
