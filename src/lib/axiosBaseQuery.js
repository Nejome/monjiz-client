import axios from "./axios";

const axiosBaseQuery = () => async ({ url, method, headers, data, params }) => {
    try {
        const result = await axios({ url: url, headers, method, data, params });

        return { data: result.data };
    } catch (axiosError) {
        let err = axiosError;

        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.message
            }
        };
    }
};

export default axiosBaseQuery;
