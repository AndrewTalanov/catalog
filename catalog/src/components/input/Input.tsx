import React from 'react';

import Button from '../button/Button';
import { InputType } from './InputType';

import styles from './Input.module.scss';

const Input: React.FC<InputType> = ({ type, placeholder, button }) => {
    
    return (
        <div className={styles['wrapper']}>

            <input 
                type={type}
                className={styles.input}
                placeholder={placeholder}
            />

            <Button
                padding={button.padding}
            >
                { button.children }
            </Button>
        </div>
    )
}

export default Input;