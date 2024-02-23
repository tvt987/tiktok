import axios from 'axios';
export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const response = await instance.get(path, option);
    return response.data;
};
