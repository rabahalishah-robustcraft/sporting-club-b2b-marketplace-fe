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
    email: string;
    password: string;
};


export const useLogin = () => {
    return useMutation({
        mutationFn: (creds: Credentials) =>
            axios.post(`${API_URL}/auth/login`, creds, {
                headers: { 'Content-Type': 'application/json' },
            }),
    });
};

export const useSignupBusiness = () => {
    return useMutation({
        mutationFn: (creds: Credentials) =>
            axios.post(`${API_URL}/auth/signup/business`, creds, {
                headers: { 'Content-Type': 'application/json' },
            }),
    });
};

export const useSignupClub = () => {
    return useMutation({
        mutationFn: (creds: Credentials) =>
            axios.post(`${API_URL}/auth/signup/club`, creds, {
                headers: { 'Content-Type': 'application/json' },
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
