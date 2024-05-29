import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../libs/axiosInstance';
import { useRouter } from 'next/router';

const fetchData = async (category: string | string[] | undefined): Promise<ProductDataResponse[]> => {
  if(category === undefined) {
    const { data } = await axiosInstance.get<ProductDataResponse[]>('/products');
    return data;
  }
  else {
    console.log(category);
    
    const { data } = await axiosInstance.get<ProductDataResponse[]>(`/products/category/${category}`);
    return data;
  }
};

const fetchCategories = async (): Promise<string[]> => {
    const { data } = await axiosInstance.get<string[]>('/products/categories');
    return data;
  };

export function useSearchData() {
  const router = useRouter();
  const { category } = router.query;
    
  return useQuery({
    queryFn: async () => {
        const productsData = await fetchData(category)
        const categories = await fetchCategories()


        return {
            productsData,
            categories
        }
    }, 
    queryKey: ['search-data']}) 
};
