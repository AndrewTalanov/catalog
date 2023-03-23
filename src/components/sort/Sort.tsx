import React from 'react';
import { useRef, useState } from 'react';
import styles from './Sort.module.scss';

const SORT_OPTIONS = [
    { label: 'Название▴', value: 'name-asc' },
    { label: 'Название▾', value: 'name-desc' },
    { label: 'Цена▴', value: 'price-asc' },
    { label: 'Цена▾', value: 'price-desc' },
];

const Sort = () => {

    const [labelOption, setLabelOption] = useState(SORT_OPTIONS[1].label);

    const options = useRef<HTMLUListElement>(null);

    function toggleOptions(): void {

        options.current?.classList.toggle(styles.open);
    }

    return (
        <div className={styles.sort}>

            <div
                onClick={toggleOptions} 
                className={styles["custom-select"]}
            >
                <p className={styles["selected-option"]}>Сортировка: <span>{labelOption}</span></p>

                <ul ref={options} className={styles.options}>
                    {SORT_OPTIONS.map(({ label, value }) => (
                        <li key={value} value={label} onClick={() => setLabelOption(label)} className={styles.option}>
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sort;