import axios from "axios";

const getData = async (id) => {
  const user = await (
    await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).data;

  const post = await (
    await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  ).data;

  return {
    user,
    post,
  };
};

export default getData;
