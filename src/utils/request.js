import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const response = await instance.get(path, option);
    return response.data;
};
