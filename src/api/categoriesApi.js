import axiosConfig from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/categories';
    return axiosConfig.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosConfig.get(url);
  },
  add(data) {
    const url = '/categories';
    return axiosConfig.post(url, data);
  },
  update(id, data) {
    const url = `/categories/${id}`;
    return axiosConfig.patch(url, data);
  },
  delete(id) {
    const url = `/categories/${id}`;
    return axiosConfig.delete(url);
  },
};

export default categoryApi;
