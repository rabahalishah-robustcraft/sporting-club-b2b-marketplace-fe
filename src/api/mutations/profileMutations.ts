import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { API_URL } from '@/constants';
import { useGetRequestOptions } from '@/hooks';
import { useGlobalContext } from '@/context';

declare module '@tanstack/react-query' {
    interface Register {
        defaultError: AxiosError;
    }
}

export type Credentials = {
    email: string;
    password: string;
};

export const useUpsertClubProfile = () => {
    const { authToken } = useGlobalContext();
    const options = useGetRequestOptions(authToken);
    return useMutation({
        mutationFn: (clubProfilePayload) => axios.put(`${API_URL}/profile/club`, clubProfilePayload, options),
    });
};
