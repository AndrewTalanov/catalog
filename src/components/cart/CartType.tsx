import { CardType } from "../card/CardType"

export type CartType = {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>,
    products: CardType,
    setProducts: React.Dispatch<any>,
    cart: number[],
    setCart: React.Dispatch<React.SetStateAction<number[]>>
}