import styles from './Cart.module.scss';
import { CartType } from './CartType';
import Data from '../../Data.json';
import { CardType } from '../card/CardType';
import { useEffect } from 'react';

const Cart: React.FC<CartType> = ({ setOpenCart, products, setProducts, cart, setCart }) => {

    const productsSet = new Set(products);
    const pr: any = [...productsSet];

    const objCount: any = {}

    const searchDouble = (prsFull: any, prs: any) => {
        prs.forEach((value: any, v: any, set: any) => {
            prsFull.forEach((el: any) => {
                if (value.id == el.id) {
                    if (objCount.hasOwnProperty(value.id)) {
                        objCount[value.id] += 1;
                    } else {
                        objCount[value.id] = 1;
                    }
                }
            });
        });
    }

    searchDouble(products, productsSet);

    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation();
        setCart(cart.filter((el: number) => el != id));
        setProducts(products.filter((el: any) => el.id != id))
        const last = products[products.length - 1];
        objCount[last.id] -= 1;
    }

    return (
        <div className={styles.wrapper} onClick={() => setOpenCart(false)}>
            <div className={styles.cart}>
                <h2>Корзина</h2>
                <div className={styles['cart-items']}>
                    {
                        products.length ? pr.map((el: CardType, i: number) => {
                            return (
                                <div key={i} className={styles['cart-item']}>
                                    <div className={styles.img}>
                                        <img src={el['image_url']} alt="картинка товара" />
                                    </div>
                                    <div className={styles.info}>
                                        <p>Название: {el.name}</p>
                                        <p>Кол-во: {objCount[el.id]}</p>
                                        <p>Цена: {el.price * objCount[el.id]}</p>
                                    </div>
                                    <button onClick={(e) => deleteItem(e, el.id)}>Удалить товар</button>
                                </div>
                            );
                        }) : <p> В корзине нет товаров </p>
                    }
                </div>
                <button className={styles.confirm}>Оплатить</button>
            </div>
        </div>
    );
}

export default Cart;
