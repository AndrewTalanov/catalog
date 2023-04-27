export type CardType = {
    id: number,
    images: string[],
    name: string,
    barcode: string,
    manufacturer: string,
    brand: string,
    categoryId: number,
    price: number,
    cart: number[],
    setCart: React.Dispatch<React.SetStateAction<number[]>>,
    map?: any,
    length?: any,
    filter?: any
}