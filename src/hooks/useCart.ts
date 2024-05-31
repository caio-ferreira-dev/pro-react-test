import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../libs/axiosInstance';

const fetchCartData = async (): Promise<ProductDataResponse[]> => {
    const cartResponse = await axiosInstance.get<CartDataResponse>('/carts/5');
   
    const productsIds = cartResponse.data.products.map((product) => {
        return product.productId
    })

    const productsPromises = productsIds.map(async (productId) => {
        const { data } = await axiosInstance.get<ProductDataResponse>(`/products/${productId}`);
        return data
    });
    const productsArray = await Promise.all(productsPromises)

    return productsArray;
};

export function useCartData() {
  return useQuery({
    queryFn: async () => {
        const productsData = await fetchCartData()

        return {
            productsData
        }
    }, 
    queryKey: ['cart-data']}) 
};
