import * as instance from '~/static/utils/httpRequest';

export const searchApi = async (q, type = 'less') => {
    try {
        const res = await instance.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
