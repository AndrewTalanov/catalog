import React from 'react';

import { CardType } from './CardType';

import styles from './Card.module.scss';

const Card: React.FC<CardType> = ({ 
    id,
    image_url,
    name,
    size_type,
    size,
    barcode,
    manufacturer,
    brand,
    price
}) => {
    return (
        <div className={styles.card} data-id={id}>
            <img src={image_url} alt="Превью товара" />
        </div>
    );
}

export default Card;