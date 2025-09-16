import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { API_URL } from '@/constants';
import { useGlobalContext } from '@/context';
import { useGetRequestOptions } from '@/hooks';


declare module '@tanstack/react-query' {
    interface Register {
        defaultError: AxiosError;
    }
}


export type Credentials = {
    email: string;
    password: string;
};


export const useUpsertAnnualSpend = () => {
    const { authToken } = useGlobalContext();
    const options = useGetRequestOptions(authToken);
    return useMutation({
        mutationFn: (annualSpendPayload) => axios.post(`${API_URL}/annualSpend`, annualSpendPayload, options),
    });
};
