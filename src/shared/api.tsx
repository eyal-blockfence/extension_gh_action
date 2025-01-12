import axios, { AxiosError } from 'axios';
import { ChatResponse, EngineResponse, ErrorResponse } from '../types/api';
import { logException } from '../shared/logs';

const BASE_URL = process.env.API_SERVER;
const API_KEY = process.env.API_KEY;

async function _fetchFunction<ResponseType>(
    page: string,
    chainId: string,
    to: string,
    url: string
): Promise<ResponseType> {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/${page}`,
            headers: {
                'x-api-key': API_KEY,
            },
            data: {
                plugin: 'BROWSER',
                chain_id: chainId,
                transaction: {
                    to,
                },
                browser_data: {
                    url,
                },
            },
        });
        return response.data;
    } catch (error) {
        logException(error);
        if (axios.isAxiosError(error) && error.response) {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError.response?.data.message) {
                throw new Error(axiosError.response.data.message);
            }
        }
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
}

export const fetchDescription = async (chainId: string, to: string): Promise<ChatResponse> => {
    return _fetchFunction<ChatResponse>('chat', chainId, to, '');
};

export const fetchAnalyze = async (chainId: string, to: string, url: string): Promise<EngineResponse> => {
    return _fetchFunction<EngineResponse>('analyze', chainId, to, url);
};
