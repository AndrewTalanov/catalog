export type CardType = {
    id: number,
    imageUrl: string,
    name: string,
    sizeType: string,
    size: string,
    barcode: string,
    manufacturer: string,
    brand: string,
    typeCare: string[],
    price: number,
    cart: number[],
    setCart: React.Dispatch<React.SetStateAction<number[]>>,
    map?: any,
    length?: any,
    filter?: any
}