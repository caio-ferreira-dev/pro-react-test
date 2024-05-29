type CartDataResponse = {
    id: number,
    userId: number
    date: string
    products: [
        {
            productId: number,
            quantity: number
        }
    ]
    __v: string
}