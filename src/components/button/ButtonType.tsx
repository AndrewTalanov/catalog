export type ButtonType = {
    children: React.ReactNode,
    fontSize?: number,
    letterSpacing?: string, 
    padding?: {
        t: number,
        r: number,
        b: number,
        l: number,
    },
    gap?: number,
    type?: "button" | "submit" | "reset" | undefined
}