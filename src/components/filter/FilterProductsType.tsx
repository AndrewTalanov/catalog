export type FilterProductsType = {
    minPrice: number,
    maxPrice: number,
    setCurrentMinPrice: React.Dispatch<React.SetStateAction<number>>,
    setCurrentMaxPrice: React.Dispatch<React.SetStateAction<number>>
}