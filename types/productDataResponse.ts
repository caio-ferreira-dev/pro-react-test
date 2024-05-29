type ProductDataResponse = {
    id: number
    title: string
    price: number
    rating: {
        rate: number
        count: number
    }
    image: string
    category: string
    description: string
}