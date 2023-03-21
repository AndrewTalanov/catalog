import React from 'react';
import styles from './Button.module.scss';
import { ButtonType } from './ButtonType';

const Button: React.FC<ButtonType> = ({ children, padding }) => {

    let paddingStr: string = padding != undefined ? padding.t + 'px ' + padding.r + 'px ' + padding.b + 'px ' + padding.l + 'px' : '';
    
    return (
        <button 
            style={{ 
                padding: paddingStr,
            }}
            className={styles.button}
        >
            {children}
        </button>
    );
}

export default Button;