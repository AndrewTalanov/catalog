export type ChapterItemType = {
    children: string,
    id: number,
    chapter: string[],
    setChapter: React.Dispatch<React.SetStateAction<string[]>>
}