import axios from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_URL, } from '../../constants';
import { useGlobalContext } from '@/context';
import { useGetRequestOptions } from '@/hooks';


export const useGetAllNonCustomCategories = (): UseQueryResult<any> => {
    const { authToken } = useGlobalContext();
    const options = useGetRequestOptions(authToken);

    return useQuery({
        queryKey: ["NonCustom", "Categories"],
        queryFn: () => axios.get(`${API_URL}/categories?is_custom=false`, options).then(res => res.data),
        enabled: true,
    });
};

