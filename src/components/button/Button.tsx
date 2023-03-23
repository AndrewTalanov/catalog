import React from 'react';
import styles from './Button.module.scss';
import { ButtonType } from './ButtonType';

const Button: React.FC<ButtonType> = ({ children, padding, fontSize, letterSpacing, gap }) => {

    const paddingStr: string = padding ? padding.t + 'px ' + padding.r + 'px ' + padding.b + 'px ' + padding.l + 'px' : '';
    
    return (
        <button 
            style={{ 
                padding: paddingStr,
                fontSize: fontSize, 
                letterSpacing: letterSpacing,
                gap: gap,
            }}
            className={styles.button}
        >
            {children}
        </button>
    );
}

export default Button;