import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = `http://localhost:5002`;
axios.defaults.withCredentials = true;
axios.defaults.transformRequest = [
  (data) => {
    return qs.stringify(data, { arrayFormat: "indices" });
  },
];

const api = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

async function conexao(url, data, metodo = "get") {
  const dadps = await api({
    _data: metodo === "get" ? undefined : data,
    _params: metodo === "get" ? data : undefined,
    method: metodo,
    data: metodo === "get" ? undefined : data,
    params: metodo === "get" ? data : undefined,
    url: url,
  });
  return dadps;
}

const get = (url = "", data = {}) => conexao(url, data);

const post = (url = "", data) => {
  return conexao(url, data, "post");
};

const put = (url = "", data = {}) => conexao(url, data, "put");

const delet = (url = "", data = {}) => conexao(url, data, "delete");

export { get, post, put, delet };
