import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { API_URL } from '@/constants';
import { useGlobalContext } from '@/context';


declare module '@tanstack/react-query' {
    interface Register {
        defaultError: AxiosError;
    }
}

export type Credentials = {
    username: string;
    password: string;
    grant_type: 'password';
    client_id: 'orthanc';
    scope: 'openid email profile';
};

export type Auth = {
    data: {
        access: string;
    };
    response: {
        data: {
            detail: string;
        };
    };
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (creds: Credentials) =>
            axios.post(`${API_URL}/login`, creds, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }),
    });
};

export const useLogout = () => {
    const { clearStorage } = useGlobalContext();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: () => axios.post(`${API_URL}logout`),
        onSuccess() {
            clearStorage();
            navigate('/login');
        },
    });
};
