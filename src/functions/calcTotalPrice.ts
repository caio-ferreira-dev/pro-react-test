export default function calcTotalPrice(data: any) {
    let total: number = 0
    data?.productsData.map((product: Product) => {
        total += product.price
    })
    return total.toFixed(2)
}
