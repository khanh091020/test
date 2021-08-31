import { CodeSharp } from "@material-ui/icons";
import axiosConfig from "./axiosClient";
// import axiosConfig from "axios";

const productApi = {
  async getAll(params) {
    const newParams = { ...params };
    newParams._start = !params._page || params._page <= 0 ? 0 : (params._page - 1) * (params._limit || 20);
    delete newParams._page;
    const data = await axiosConfig.get(`/products`, { params: newParams });
    const countData = await axiosConfig.get(`/products/count`, { params: newParams });
    return {
      data,
      panigations: {
        page: params._page,
        limit: params._limit,
        total: countData
      }
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosConfig.get(url);
  },
  add(data) {
    const url = "/products";
    return axiosConfig.post(url, data);
  },
  update(id, data) {
    const url = `/products/${id}`;
    return axiosConfig.patch(url, data);
  },
  delete(id) {
    const url = `/products/${id}`;
    return axiosConfig.delete(url);
  }
};

export default productApi;
