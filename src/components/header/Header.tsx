import styles from './Header.module.scss';
import { HeaderType } from './HeaderType';
import Data from '../../Data.json';

import iconLogo from '../../assets/img/logo.svg';
import iconCub from '../../assets/img/cub.svg';
import iconSearch from '../../assets/img/search.svg';
import iconDowload from '../../assets/img/dowload.svg';
import iconBasket from '../../assets/img/basket-black.svg';
import iconPsevdochel from '../../assets/img/psevdochel.png';

import Button from '../button/Button';
import Input from '../input/Input';
import Dashed from '../dashed/Dashed';
import Account from '../account/Account';
import { useState, useEffect, useRef } from 'react';
import Cart from '../cart/Cart';
import { CardType } from '../card/CardType';

const Header: React.FC<HeaderType> = ({ cart, setCart }) => {

    const initialValue = [0];
    const [arrayPrice, setArrayPrice] = useState<number[]>(initialValue);
    const [products, setProducts] = useState<any>([]);
    const [price, setPrice] = useState<number | undefined>(0);
    const [openCart, setOpenCart] = useState(false);
    const header: any = useRef();

    useEffect(() => {
        setArrayPrice(initialValue);
        cart.forEach(id => {
            Data.products.forEach(el => {
                if (id == el.id) {
                    setProducts([...products, el]);
                    setArrayPrice([...arrayPrice, el.price]);
                }
            });
        });
    }, [cart]);

    useEffect(() => {
        setPrice(arrayPrice?.reduce((a, b) => a + b));
    }, [arrayPrice]);

    useEffect(() => {

        const body = header?.current.closest('body');

        openCart ? body.classList.add('body-hidden') : body.classList.remove('body-hidden')

    }, [openCart]);

    return (
        <header ref={header} className={styles.header}>
            <a href="#"><img src={iconLogo} alt="Логотип компании" /></a>

            <div className={styles.search}>
                <Button
                    padding={{
                        t: 21,
                        r: 54,
                        b: 21,
                        l: 54
                    }}
                    gap={12}
                    fontSize={14}
                >
                    Каталог <img src={iconCub} alt="Кубики" />
                </Button>

                <Input
                    type='text'
                    placeholder='Поиск...'
                    button={{
                        children: <img src={iconSearch} alt='Иконка поиска' />,
                        padding: { t: 13, r: 12, b: 12, l: 13 }
                    }}
                />
            </div>

            <div className={styles.other}>
                <div className={styles.feedback}>
                    <div className={styles.info}>
                        <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p>время работы: 9:00-20:00</p>
                        <a href="tel:+77774900091">Заказать звонок</a>
                    </div>
                    <img src={iconPsevdochel} alt="Сотрудник компании" />
                </div>

                <Dashed
                    height={49}
                />
                <Account

                />
                <Dashed
                    height={49}
                />

                <div className={styles.basket} onClick={() => setOpenCart(!openCart)}>

                    <div className={styles.icon}>
                        <img src={iconBasket} alt="Корзина" />
                        <div className={styles.count}>
                            <div className={styles.back}></div>
                            <p>{cart.length}</p>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <p>Корзина</p>
                        <p>
                            {price} ₸</p>
                    </div>


                </div>

                {openCart ? <Cart
                    setOpenCart={setOpenCart}
                    products={products}
                    cart={cart}
                    setCart={setCart}
                    setProducts={setProducts}
                /> : ''}
            </div>




        </header>
    );
}

export default Header;