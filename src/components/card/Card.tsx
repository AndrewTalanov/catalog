import React from 'react';

import Button from '../button/Button';

import { CardType } from './CardType';

import styles from './Card.module.scss';

import iconVolume from '../../assets/img/volume.svg';
import iconWeight from '../../assets/img/weight.svg';
import iconBasket from '../../assets/img/basket.svg';

const SIZETYPES = {
    WEIGHT: 'вес',
    VOLUME: 'объем'
}

const defineIcon = (sizeType: string): string => {
    switch (sizeType) {
        case SIZETYPES.WEIGHT:
            return iconWeight;
        case SIZETYPES.VOLUME:
            return iconVolume;
        default:
            return '';
    }
}

const Card: React.FC<CardType> = ({
    id,
    imageUrl,
    name,
    sizeType,
    size,
    barcode,
    manufacturer,
    brand,
    price
}) => {

    return (
        <div className={styles.card} data-id={id}>

            <img src={imageUrl} alt="Превью товара" />

            <div className={styles.size}>
                <img src={defineIcon(sizeType)} alt="Иконка тип размера" />
                <p>{size}</p>
            </div>

            <h2 className={styles.title}>
                <span>{name.split(" ")[0]}</span>
                {' ' + name.substring(name.indexOf(' ') + 1)}
            </h2>

            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <div className={styles["info-item"]}>
                        <p><span>Штрихкод: </span>{barcode}</p>
                    </div>
                    <div className={styles["info-item"]}>
                        <p><span>Производитель: </span>{manufacturer}</p>
                    </div>
                    <div className={styles["info-item"]}>
                        <p><span>Бренд: </span>{brand}</p>
                    </div>
                </div>

                <div className={styles.action}>
                    <p>{price} ₸</p>
                    <Button
                        padding={{ t: 13, r: 27, b: 13, l: 27 }}
                        fontSize={10}
                        letterSpacing={'0.15em'}
                    >
                        В КОРЗИНУ
                        <img src={iconBasket} alt="Иконка корзины"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Card;