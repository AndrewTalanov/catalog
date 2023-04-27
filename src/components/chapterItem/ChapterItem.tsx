import React from 'react';
import { ChapterItemType } from './ChapterItemType';

import styles from './ChapterItem.module.scss';

const ChapterItem: React.FC<ChapterItemType> = ({ children, id, chapter, setChapter }) => {

    const setChapterItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (e.target instanceof HTMLElement) {
            e.target.closest('div[data-id]')?.classList.toggle(styles.active);

            const target = e.target as HTMLElement;

            const id: any = target.closest('div[data-id]')?.getAttribute('data-id');

            if (chapter.find(el => el == id)) {
                if (e.target.textContent) {
                    const index = chapter.indexOf(id);
                    setChapter([...chapter.slice(0, index), ...chapter.slice(index + 1)])
                }
            } else {
                setChapter([...chapter, id]);
            }
        }
    }

    return (
        <div className={styles.item} data-id={id}>
            <p onClick={(e) => setChapterItem(e)}>{children}</p>
        </div>
    );
}

export default ChapterItem;