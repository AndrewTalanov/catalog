import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import React from 'react';
import { SelectType } from './SelectType';

const Select: React.FC<SelectType> = ({options, select, setSelect}) => {

    const optionsList = useRef<HTMLUListElement>(null);

    useEffect(() => {
        optionsList.current?.classList.add(styles.open);
    })

    function toggleOptions(): void {
        optionsList.current?.classList.toggle(styles.open);
    }

    return (
        <div
            onClick={toggleOptions} 
            className={styles["custom-select"]}
        >
            <p className={styles["selected-option"]}>Сортировка: <span>{select}</span></p>

            <ul ref={optionsList} className={styles.options}>
                {options.map(({ label, value }) => (
                    <li key={value} value={label} onClick={() => setSelect(label)} className={styles.option}>
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Select;