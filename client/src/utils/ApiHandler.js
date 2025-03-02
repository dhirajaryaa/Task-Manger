import axios from "axios";

export const ApiHandler = async (
  path = "/tasks",
  method = "get",
  data,
  headers
) => {
  const res = await axios[method](
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    data,
    headers
  )
    .then((task) => task.data)
    .catch((err) => {
      console.error("API Error:", err);
    });
  return res;
};
