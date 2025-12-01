import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/v1/poll';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const pollService = {

    createPoll: async (pollData) => {
        console.log(pollData)
        const response = await axiosInstance.post(
            `/create`,
            pollData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response;
    },
};