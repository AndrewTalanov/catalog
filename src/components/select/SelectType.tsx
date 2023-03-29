export type SelectType = {
    options: 
    {
        label: string,
        value: string
    }[],
    select: string,
    setSelect: React.Dispatch<React.SetStateAction<string>>
}