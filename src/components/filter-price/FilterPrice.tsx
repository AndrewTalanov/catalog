import styles from "./FilterPrice.module.scss";
import { FilterPriceType } from "./FilterPriceType";
import { useState, useEffect } from 'react';

const FilterPrice: React.FC<FilterPriceType> = ({minPriceCard, maxPriceCard}) => {

    const EVENTTYPES = {
        FOCUS: 'focus',
        BLUR: 'blur',
        CHANGE: 'change' 
    }

    const INPUTNAMES = {
        MIN: 'min',
        MAX: 'max'
    }

    const DIFFPRICES = {
        MIN: 0,
        MAX: 1000000
    } 

    type stateType = {
        value: number | string;
    }

    const [minPrice, setMinPrice] = useState<stateType>({value: minPriceCard});
    const [maxPrice, setMaxPrice] = useState<stateType>({value: maxPriceCard});

    useEffect(() => {
        setMinPrice({value: minPriceCard});
        setMaxPrice({value: maxPriceCard});
    }, [minPriceCard, maxPriceCard]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>, eventType: string) {

        const target = e.target;
        const type = e.type;
        const name = target.getAttribute('name');

        if (EVENTTYPES.CHANGE == type) {

            if (INPUTNAMES.MIN == name) {

                setMinPrice({value: target.value});

                if (+target.value < DIFFPRICES.MIN) {
                    setMinPrice({value: minPriceCard});
                }
                if (+target.value > +maxPrice.value) {
                    setMinPrice({value: maxPrice.value});
                }

            }
            else if (INPUTNAMES.MAX == name) {

                setMaxPrice({value: target.value});

                if (+target.value > DIFFPRICES.MAX) {
                    setMaxPrice({value: DIFFPRICES.MAX});
                }
            } 
        }
        else if (EVENTTYPES.BLUR == type) {

            if (target.value == '') {
                
                if (INPUTNAMES.MAX == name) {
                    setMaxPrice({value: maxPriceCard});
                }
                if (INPUTNAMES.MIN == name) {
                    setMinPrice({value: minPriceCard});
                }
            }
            else if (INPUTNAMES.MAX == name) {

                if (+target.value < +minPrice.value) {
                    setMaxPrice({value: minPrice.value});
                }
                if (+target.value > maxPriceCard) {
                    setMaxPrice({value: maxPriceCard});
                }
            }
            else if (INPUTNAMES.MIN == name) {

                if (+target.value < minPriceCard) {
                    setMinPrice({value: minPriceCard});
                }
            }
        }
    }

    return (
        <div className={styles["filter-price"]}>
            <p className={styles["filter-title"]}>Цена <span>₸</span></p>
            <div className={styles.numbers}>
                <div className={styles["min-price"]}>
                    <input
                        type="number"
                        value={minPrice.value}
                        onFocus={(e) => handleChange(e, EVENTTYPES.FOCUS)}
                        onBlur={(e) => handleChange(e, EVENTTYPES.BLUR)}
                        onChange={(e) => handleChange(e, EVENTTYPES.CHANGE)}
                        name={INPUTNAMES.MIN}
                    />
                </div>
                -
                <div className={styles["max-price"]}>
                    <input
                        type="number"
                        value={maxPrice.value}
                        onFocus={(e) => handleChange(e, EVENTTYPES.FOCUS)}
                        onBlur={(e) => handleChange(e, EVENTTYPES.BLUR)}
                        onChange={(e) => handleChange(e, EVENTTYPES.CHANGE)}
                        name={INPUTNAMES.MAX}
                    />
                </div>
            </div>
        </div>

    )
}

export default FilterPrice;