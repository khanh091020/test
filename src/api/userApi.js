import axiosConfig from "./axiosClient";

const userAPI = {
  register(data) {
    const url = "/auth/local/register";
    return axiosConfig.post(url, data);
  },
  login(data) {
    const url = "/auth/local";
    return axiosConfig.post(url, data);
  }
};

export default userAPI;
