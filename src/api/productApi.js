import axiosConfig from './axiosClient';

const productApi = {
  getAll(params) {
    const url = '/products';
    return axiosConfig.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosConfig.get(url);
  },
  add(data) {
    const url = '/products';
    return axiosConfig.post(url, data);
  },
  update(id, data) {
    const url = `/products/${id}`;
    return axiosConfig.patch(url, data);
  },
  delete(id) {
    const url = `/products/${id}`;
    return axiosConfig.delete(url);
  },
};

export default productApi;
